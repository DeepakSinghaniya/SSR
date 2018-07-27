const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev.base.js');


const config = {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: path.join(__dirname, '/../../src/client/client.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/../../public')
    } 
};

module.exports = merge(baseConfig, config);