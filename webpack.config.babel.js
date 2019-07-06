import path from 'path';
import HTMLPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import CSSNano from 'cssnano';
import Autoprefixer from 'autoprefixer';
import TerserPlugin from 'terser-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HTMLCriticalPlugin from 'html-critical-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';

const htmlCriticalPluginHelper = (isProd) => {
    if (isProd) {
        return new HTMLCriticalPlugin(
            {
                base: path.resolve(__dirname, 'build'),
                src: 'index.html',
                dest: 'index.html',
                inline: true,
                minify: true,
                extract: true,
                width: 400,
                height: 800,
                penthouse: { blockJSRequests: false },
            },
        );
    }

    return () => {};
};

export default (env) => {
    const hashLength = 8;

    return {
        entry: {
            index: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
                filename: `[name]${env.production ? `.[contenthash:${hashLength}]` : ''}.js`,
                chunkFilename: `[name]${env.production ? `.[contenthash:${hashLength}]` : ''}.js`
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
                                localsConvention: 'camelCase',
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                ident: 'postscss',
                                plugins: env.production
                                    ? [Autoprefixer, CSSNano]
                                    : [Autoprefixer],
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true },
                        },
                    ],
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
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                ident: 'postcss',
                                plugins: env.production ? [CSSNano] : [],
                            },
                        },
                    ],
                },
                {
                    test: /\.(svg|png)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { name: `[name]${env.production ? `.[contenthash:${hashLength}]` : ''}.[ext]` },
                        },
                    ],
                },
            ],
        },
        optimization: {
            minimizer: [
                new TerserPlugin(
                    {
                        sourceMap: true,
                        terserOptions: {
                            parallel: true,
                            output: { comments: false },
                        },
                    },
                ),
            ],
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
            new HTMLPlugin(
                {
                    inject: false,
                    minify: env.production ? { collapseWhitespace: true, removeComments: true, minifyJS: true } : false,
                    template: path.resolve(__dirname, 'src/index.html.ejs'),
                },
            ),
            new MiniCSSExtractPlugin(
                {
                    filename: `[name]${env.production ? `.[contenthash:${hashLength}]` : ''}.css`,
                }
            ),
            htmlCriticalPluginHelper(env.production),
            new GenerateSW(
                {
                    cleanupOutdatedCaches: true,
                    clientsClaim: true,
                    importWorkboxFrom: 'local',
                    offlineGoogleAnalytics: {
                        parameterOverrides: {
                            cd1: 'offline',
                        },
                    },
                    skipWaiting: true,
                },
            ),
            new CopyPlugin([
                { from: 'src/manifest.json', to: '.' },
                { from: 'src/images/**/*.png', to: 'images/', flatten: true },
                { from: 'src/images/**/*.ico', to: 'images/', flatten: true },
                { from: 'src/localizable/**/*.json', to: 'localizable/', flatten: true },
                { from: 'src/localizable/**/*.json', to: 'content/en/', flatten: true },
            ]),
        ],
    };
};
