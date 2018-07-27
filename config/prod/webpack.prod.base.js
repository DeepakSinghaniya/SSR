const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: 'eslint',

                        },
                        loader: 'eslint-loader',
                    },
                ],
                include: path.resolve(__dirname, 'src/'),
            },
            {
                test: /\.js?$/,
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
        ]
    }
}