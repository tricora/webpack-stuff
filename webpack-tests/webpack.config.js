const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'dist/index.js'
    },
    resolveLoader: {
        alias: {
            'modify-json-loader': path.resolve('../modify-json-loader/src/index.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.json/,
                use: [
                    'json-loader',
                    {
                        loader: 'modify-json-loader',
                        options: {
                            set: {
                                '/nice/to': 'know'
                            }
                        }
                    }
                ]
            }
        ]
    }
};