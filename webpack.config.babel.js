import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export default (env) => {
    return {
        entry: {
            index: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
                filename: `[name]${env.production ? '.[contenthash]' : ''}.js`,
                chunkFilename: `[name]${env.production ? '.[contenthash]' : ''}.js`
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
                            options: { name: `[name]${env.production ? '.[contenthash]' : ''}.[ext]` },
                        },
                    ],
                },
            ],
        },
        optimization: {
            runtimeChunk: 'single',
                splitChunks: {
                chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 0,
                    cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                            name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `vendor.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        },
        plugins: [
            new HTMLWebpackPlugin(
                {
                    inject: false,
                    minify: env.production ? { collapseWhitespace: true, removeComments: true } : false,
                    template: 'src/index.html.ejs',
                },
            ),
            new MiniCSSExtractPlugin(
                {
                    filename: `[name]${env.production ? '.[contenthash]' : ''}.css`,
                }
            ),
        ],
    };
};
