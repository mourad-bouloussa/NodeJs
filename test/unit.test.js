// JEST
import { sum } from '../src/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


/* MOCHA
//"test": "mocha --require babel-polyfill --require @babel/register --compilers js:babel-core/register"
import assert from 'assert'
const assert = assert()
*/
/*
const assert = require('assert');

describe('Simple Math Test', () => {
    it('should return 2', () => {
           assert.equal(1 + 1, 2);
       });
    it('should return 9', () => {
           assert.equal(3 * 3, 9);
       });
   });
   */