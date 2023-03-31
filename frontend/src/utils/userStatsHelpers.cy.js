import {
  coinCalculator,
  calculateLevel,
  calculateXP,
} from "./userStatsHelpers";

describe("coinCalculator", () => {
  it("returns the correct coin amount for a given score", () => {
    expect(coinCalculator(7)).to.equal(70);
    expect(coinCalculator(8)).to.equal(80);
    expect(coinCalculator(9)).to.equal(100);
    expect(coinCalculator(10)).to.equal(200);
    expect(coinCalculator(6)).to.equal(10);
  });
});

describe("calculateLevel", () => {
  it("returns the correct level for a given XP amount", () => {
    expect(calculateLevel(400)).to.equal(1);
    expect(calculateLevel(1000)).to.equal(2);
    expect(calculateLevel(2500)).to.equal(3);
    expect(calculateLevel(4500)).to.equal(4);
    expect(calculateLevel(7500)).to.equal(5);
    expect(calculateLevel(11000)).to.equal(6);
    expect(calculateLevel(16000)).to.equal(7);
    expect(calculateLevel(22000)).to.equal(8);
    expect(calculateLevel(29000)).to.equal(9);
    expect(calculateLevel(37000)).to.equal(10);
    expect(calculateLevel(46000)).to.equal(11);
    expect(calculateLevel(56000)).to.equal(12);
    expect(calculateLevel(67000)).to.equal(13);
    expect(calculateLevel(79000)).to.equal(14);
    expect(calculateLevel(100000)).to.equal(15);
  });
});

describe("calculateXP", () => {
  it("returns the correct XP for a given array of words studied", () => {
    const wordsStudied1 = ["ごめんなさい", "ありがとう"];
    expect(calculateXP(wordsStudied1)).to.equal(11);
  });
});
