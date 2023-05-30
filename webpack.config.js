// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require('terser-webpack-plugin');

// const path = require("path");

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename : 'bundle.js', // Tên file đầu ra
//         path : path.resolve(__dirname, 'build') // Nơi chưa file đầu ra
//     },
//     resolve: {
//         extensions: ["*", ".js", ".jsx"],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react']
//                     }
//                 },
               
//             },
           
//             {
//                 test: /\.css$/,
//                 exclude: /node_module/,
               
//                 use: ['style-loader', 'css-loader']
//             },

           
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: './src/index.html'
//         })
//     ]
// };
const path = require("path");
const webpack = require("webpack");

const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "hieu"),
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
 
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    // devtool: "cheap-module-eval-source-map",
};