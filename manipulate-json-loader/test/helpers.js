const chai = require('chai');
const fs = require('fs');
const path = require('path');

global.expect = chai.expect;
global.sampleJSON = fs.readFileSync(path.resolve(__dirname, 'data/test.json'), 'utf-8');
