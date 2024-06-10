const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/client'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/client/assets', to: 'assets' }
            ],
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist/client'),
        compress: true,
        port: 5000,
        historyApiFallback: true, // Use this if you are using React Router
    },
    mode: 'development',
};
