import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import routes from '../routes/routes';
import { getBundles } from 'react-loadable/webpack'
import stats from '../../dist/react-loadable.json'

const renderer = (req, store, context) => {

    let modules = [];

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{ context }}>
                <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                    {renderRoutes(routes)}
                </Loadable.Capture>
            </StaticRouter>
        </Provider>);
    const helmet = Helmet.renderStatic();

    let bundles = getBundles(stats, modules);

    console.log(bundles);

    return `<html>
    <head>
    ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
    <body>
        <div id="root">${content}</div>
        ${bundles.map(bundle => {
            return `<script src="${bundle.file}"></script>`
            // alternatively if you are using publicPath option in webpack config
            // you can use the publicPath value from bundle, e.g:
            // return `<script src="${bundle.publicPath}"></script>`
          }).join('\n')}
        <script>
        /* <![CDATA[ */
        window.INITIAL_STATE = ${serialize(store.getState())}
        /* ]]> */
        </script>
        <script src="bundle.js"></script>
    </body>
    </html>`;
}

export default renderer;