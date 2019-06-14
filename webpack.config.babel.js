import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: { hmr: true },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            camelCase: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: { hmr: true },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[name].[ext]' },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin(
            {
                inject: false,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                },
                template: 'src/index.html.ejs',
            },
        ),
        new MiniCSSExtractPlugin({ filename: '[name].css' }),
    ],
};
