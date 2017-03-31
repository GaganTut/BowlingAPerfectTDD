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
    c: 4
  }
];

let game2 = [
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0
  },
  {
    a: 0,
    b: 0,
  }
];

let game3 = [
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10
  },
  {
    a: 10,
    b: 10,
    c: 10
  }
];

let game4 = [
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5,
    c: 5
  }
];

let game5 = [
  {
    a: 5,
    b: 5
  },
  {
    a: 10
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 10
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 10
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 10
  },
  {
    a: 5,
    b: 5
  },
  {
    a: 5,
    b: 5,
    c: 5
  }
];



describe("score function", () => {
  it("should be a function", () => {
    expect(score).to.be.a("function");
  });

  it("should only take in an array of data", () => {
    expect(score.bind(null, 19)).to.throw(Error);
    expect(score.bind(null, {a: 12})).to.throw(Error);
    expect(score.bind(null, NaN)).to.throw(Error);
    expect(score.bind(null, "Bowling")).to.throw(Error);
  });

  it("should only take an array of 10 objects", () => {
    expect(score.bind(null, [4, 5, 9])).to.throw(Error);
    expect(score.bind(null, [{4: 5}, {a: 7}, {b: 2}])).to.throw(Error);
  });

  it("should be able to calculate a perfect game", () => {
    expect(score(game3)).to.equal(300);
    expect(score(game2)).to.equal(0);
  });

  it("should calculate spares", () => {
    expect(score(game4)).to.equal(150);
  });

  it("should calculate mixed scores", () => {
    expect(score(game5)).to.equal(190);
    expect(score(game1)).to.equal(166);
  });
});