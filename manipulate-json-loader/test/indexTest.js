const loader = require('../src/index');

describe('manipulate-json-loader', () => {
    it('should export a function', () => {
        expect(loader).is.a('function');
    });
});