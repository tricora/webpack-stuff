module.exports = function(val) {
    if (val === undefined) {
        return [];
    }
    return Array.isArray(val) ? val : [val];
};