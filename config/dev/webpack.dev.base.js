const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;


module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                include: path.join(__dirname, '/../../src/'),
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: 'eslint',
                        }
                    },
                ],
            },

            {
                // "oneOf" will traverse all following loaders until one will
                // match the requirements. When no loader matches it will fall
                // back to the "file" loader at the end of the loader list.
                oneOf: [
                    // "url" loader works like "file" loader except that it embeds assets
                    // smaller than specified limit in bytes as data URLs to avoid requests.
                    // A missing `test` is equivalent to a match.
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    // Process JS with Babel.
                    {
                        test: /\.(js|jsx|mjs)$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        options: {
                            presets: [
                                'react',
                                'stage-0',
                                ['env', {
                                    targets: {
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9', // React doesn't support IE8 anyway
                                        ]
                                    }
                                }]
                            ],
                        },
                    }

                ],
            }

        ]
    },
    "plugins": [
        new ReactLoadablePlugin({
            filename: path.join(__dirname, '/../../dist/react-loadable.json'),
          }),
    ]
}
