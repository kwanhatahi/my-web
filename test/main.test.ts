import main = require('../src/main');
import { expect } from 'chai';

describe('Add tests', () => { // the tests container
    it('checking default options', () => { // the single test
 
        expect(main.add(10, 20)).to.equal(30); // As I said 3 lines above

       
    });
});