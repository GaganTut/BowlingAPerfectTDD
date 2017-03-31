/* jshint esversion: 6 */

const chai = require("chai");
const score = require("../bowlScore.js");

const expect = chai.expect;

let game1 = [
  {
    a: 4,
    b: 3
  },
  {
    a: 10,
  },
  {
    a: 7,
    b: 3
  },
  {
    a: 8,
    b: 0
  },
  {
    a: 2,
    b: 8
  },
  {
    a: 10,
  },
  {
    a: 10,
  },
  {
    a: 8,
    b: 0
  },
  {
    a: 3,
    b: 7
  },
  {
    a: 10,
    b: 5,
    c: 9
  }
];

describe("score function", () => {
  it("should be a function", () => {
    expect(score).to.be.a("function");
  });
});