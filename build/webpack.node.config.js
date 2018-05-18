'use strict';

const webpack = require('webpack');
let path=require("path");

let externals = _externals();

module.exports = {
    entry: {
        app: path.join(__dirname,'/../server/app.js'),
    },
    target: 'node',
    output: {
        path: path.join(__dirname,'/../dist'),
        filename: 'nodeServer.js'
    },
    resolve: {
        extensions: ['.js']
    },
    // externals: externals,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // query: {
                //     presets: ['es2015','stage-0']
                // },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

function _externals() {
    let manifest = require('../package.json');
    // console.log(manifest);
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    // console.log("externals>>>"+JSON.stringify(externals));
    return externals;
}
