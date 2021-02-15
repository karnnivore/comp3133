var calculator = require('../app/calculator');
var assert = require('chai').assert;

//passing test for add
describe("add", () => {
  function makeTest(x, y) {
    let expected = x + y;
    it(`${x} + ${y} added is ${expected}`, () =>{
      assert.equal(calculator.add(x, y), expected);
    });
  }
  makeTest(5, 10)
})

//failing tests for add
describe("add", () => {
  function addTest(x, y) {
    let expected = x + (y+1)
    it(`${x} + ${y} added is ${expected}`, () =>{
      assert.equal(calculator.add(x, y), expected);
    })
  }
  //loop through giving two values to tests
  addTest(1, 5)
})

//passing tests for multiply
describe("mul", () => {
  function mulTest(x, y) {
    let expected = x * y;
    it(`${x} * ${y} multiplied is ${expected}`, () =>{
      assert.equal(calculator.mul(x, y), expected);
    })
  }

  mulTest(10, 5)
})

//failing test multiply
describe('mul', () => {
  function mulTest(x, y) {
    let expected = x * (y+1);
    it(`${x} * ${y} multiplied is ${expected}`, () =>{
      assert.equal(calculator.mul(x, y), expected)
    })
  }
  mulTest(10, 5)
})

//passing test division
describe('div', () => {
  function divTest(x, y) {
    let expected = x / y;
    it(`${x} / ${y} divided is ${expected}`, () =>{
      assert.equal(calculator.div(x, y), expected)
    })
  }
  divTest(10, 5)
})
//failing test division
describe('div', () => {
  function divTest(x, y) {
    let expected = x / (y+1);
    it(`${x} / ${y} divided is ${expected}`, () =>{
      assert.equal(calculator.div(x, y), expected)
    })
  }
  divTest(10, 5)
})

//passing test subtraction
describe('sub', () => {
  function subTest(x, y) {
    let expected = x - y;
    it(`${x} - ${y} subtracted is ${expected}`, () =>{
      assert.equal(calculator.sub(x, y), expected)
    })
  }
  subTest(10, 5)
})
//failing test division
describe('sub', () => {
  function subTest(x, y) {
    let expected = x - (y+1);
    it(`${x} - ${y} subtracted is ${expected}`, () =>{
      assert.equal(calculator.sub(x, y), expected)
    })
  }
  subTest(10, 5)
})