const chai = require('chai');
const add = require('../math');
var expect = chai.expect

describe('add' , function(){
    it('expect return 3' , function(){
        expect(add(1,2)).to.eq(3);
    });

    it('expect return 5' , function(){
        expect(add(3,2)).to.eq(5);
    });
});