const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const rootDirectory = path.resolve(__dirname, '..');

module.exports = {
    mode: 'development',
    entry: path.resolve(rootDirectory, 'src', 'index.ts'),
    output: {
        path: path.resolve(rootDirectory, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s/,
                include: [
                    path.resolve(rootDirectory, 'src'),
                ],
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(rootDirectory, 'config', '.babelrc'),
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ],
};
