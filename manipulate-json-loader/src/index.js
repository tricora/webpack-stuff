const loaderUtils = require('loader-utils');
const ptr = require('json-pointer');
const utils = require('./utils');

module.exports = function(source) {
    try {
        const obj = typeof source === 'string' ? JSON.parse(source) : source;

        const options = loaderUtils.getOptions(this);
        if (!options) {
            return obj;
        }

        let result;
        if (options.include !== undefined) {
            result = {};
            utils.toArray(options.include).forEach(val => {
                utils.enforceString(val, 'only string or array of strings are allowed for include');
                if (ptr.has(obj, val)) {
                    ptr.set(result, val, ptr.get(obj, val));
                }
            });
        } else {
            result = obj;
        }

        if (options.exclude !== undefined) {
            console.log('exclude set');
            utils.toArray(options.exclude).forEach(val => {
                utils.enforceString(val, 'only string or array of strings are allowed for exclude');
                if (ptr.has(result, val)) {
                    ptr.remove(result, val);
                }
            });
        }

        return options.stringified ? JSON.stringify(result) : result;
        
    } catch (error) {
        throw new Error('manipulate-json-loader: ' + error.message);
    }
};