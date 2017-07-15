const loader = require('../src/index');

describe('set', () => {

    let sampleObject;

    beforeEach(() => {
        sampleObject = JSON.parse(sampleJSON);
    });

    it('should throw an exception if called without an object', () => {
        const func = () => {
            loader.call({
                query: {
                    set: 'blub'
                }
            });
        };
        expect(func).to.throw(Error);
    });

    it('should set additional values to json', () => {
        const result = loader.call({
            query: {
                set: {
                    '/object': { blub: 'bla' },
                    '/string': 'a string',
                    '/number': 42,
                    '/array': [0, 1, 2],
                    '/boolean': true,
                    '/null': null
                }
            }
        }, {
            key: 'value'
        });
        expect(result).to.deep.equal({
            object: { blub: 'bla' },
            string: 'a string',
            number: 42,
            array: [0, 1, 2],
            boolean: true,
            null: null,
            key: 'value'
        });
    });

    it('should set result of function is a function is provided as value', () => {
        const result = loader.call({
            query: {
                set: {
                    '/new': () => 'new value',
                    '/name': (val) => `${val} hit!`,
                }
            }
        }, sampleObject);
        expect(result.new).to.equal('new value');
        expect(result.name).to.equal('KO hit!');
    });

});