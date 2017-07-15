const loader = require('../src/index');

describe('update', () => {

    let sampleObject;

    beforeEach(() => {
        sampleObject = JSON.parse(sampleJSON);
    });

    it('should throw an exception if called without an object', () => {
        const func = () => {
            loader.call({
                query: {
                    update: 'blub'
                }
            });
        };
        expect(func).to.throw(Error);
    });

    it('should set additional values to json', () => {
        const result = loader.call({
            query: {
                update: {
                    '/object': { blub: 'bla' },
                    '/string': 'a string',
                    '/number': 42,
                    '/array': [0, 1, 2],
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
            null: null,
            key: 'value'
        });
    });

    it('should set result of function is a function is provided as value', () => {
        const result = loader.call({
            query: {
                update: {
                    '/new': () => 'new value',
                    '/name': (val) => `${val} hit!`,
                }
            }
        }, sampleObject);
        expect(result.new).to.equal('new value');
        expect(result.name).to.equal('KO hit!');
    });

});