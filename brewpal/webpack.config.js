const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const combineLoaders = require('webpack-combine-loaders');


module.exports = {
    context: __dirname,

    entry: {
        recipe: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './app/src/js/react-render.js'
        ]
    },

    output: {
        path: path.resolve('./app/src/bundles/'),
        publicPath: 'http://localhost:3000/app/src/bundles/',
        filename: "[name]-[hash].js",
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                        }
                    }
                ])
            }],

    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
};