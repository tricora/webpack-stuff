module.exports = function(source) {
    throw new Error('damn u');
    return source.replace('$VAL0', 'World').replace('$VAL1', 'Dude');
}