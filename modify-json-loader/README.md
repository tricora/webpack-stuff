# modify-json-loader

Modifies JSON before passed to json-loader.

## How to use
install via npm:
```bash
npm install --save-dev modify-json-loader
```
add to webpack config:
```js
module: {
    loaders: [
        {
            test: /package\.json/,
            use: [
                'json-loader',
                {
                    loader: 'modify-json-loader',
                    options: {
                        include: '/name'
                    }
                }
            ]
        }
    ]
}
```
### Options