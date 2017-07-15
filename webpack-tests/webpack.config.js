const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'dist/index.js'
    },
    resolveLoader: {
        alias: {
            'manipulate-json-loader': path.resolve('../manipulate-json-loader/src/index.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.json/,
                use: [
                    'json-loader',
                    {
                        loader: 'manipulate-json-loader',
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