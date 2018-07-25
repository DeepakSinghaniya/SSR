import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import routes from './routes/routes';
import createReduxStore from './helpers/createStore';

const app = express();

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = ' 10.0.4.24:3210';
            return opts;
        }
    })  
);

app.use(express.static('public'));

app.set('port', process.env.PORT || 3210);

app.get('*', function (req, res) {
    const store = createReduxStore(req);

    const matchRoute = matchRoutes(routes, req.path);
    const promises = matchRoute.map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

});

app.listen(app.get('port'), function () {
    console.log('server in listening on port: ' + app.get('port'));
});

