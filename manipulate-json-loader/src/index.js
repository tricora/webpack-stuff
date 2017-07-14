const loaderUtils = require('loader-utils');
const ptr = require('json-pointer');

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    if (!options) {
        return source;
    }
    console.log('---------------------------------');
    const obj = typeof source === 'string' ? JSON.parse(source) : source;

    

    console.log('---------------------------------');
    return obj;
};