const path = require('path');

const rootDirectory = path.resolve(__dirname, '..');

module.exports = {
    mode: 'development',
    entry: path.resolve(rootDirectory, 'src', 'index.js'),
    output: {
        path: path.resolve(rootDirectory, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                include: [
                    path.resolve(rootDirectory, 'src'),
                ],
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(rootDirectory, 'config', '.babelrc'),
                }
            },
        ],
    },
}
