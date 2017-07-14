const converter = require('../src/arrayConverter');

describe('arrayConverter', () => {
    it('should export a function', () => {
        expect(converter).is.a('function');
    });

    it('should return emtpy array if called with undefined', () => {
        expect(converter()).is.a('array').and.have.length(0);
    });
    
    it('should return emtpy array if called with empty array', () => {
        expect(converter([])).is.a('array').and.have.length(0);
    });

    it('should return every array passed', () => {
        const array = [1, 2, {blub: 'bla'}];
        expect(converter(array)).to.deep.equal(array);
    });
});