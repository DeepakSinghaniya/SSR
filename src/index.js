import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import renderer from './helpers/renderer';
import routes from './routes/routes';
import createReduxStore from './helpers/createStore';

const app = express();

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = ' 10.0.4.24';
            return opts;
        }
    })
);

app.use(express.static('public'));

app.set('port', process.env.PORT || 3910);

app.get('*', function (req, res) {
    const store = createReduxStore(req);

    const matchRoute = matchRoutes(routes, req.path);
    const promises = matchRoute.map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    }).map((promise) => {
        if (promise) {
            return (new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            }));
        }
        return null;
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });

});

Loadable.preloadAll().then(() => {

    app.listen(app.get('port'), function () {
        console.log('server in listening on port: ' + app.get('port'));
    });

});