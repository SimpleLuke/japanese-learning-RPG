import { newWords } from "./wordsLearntHelpers";

describe("newWords", () => {
  it("returns an empty array if wordsStudied is falsy", () => {
    const wordsLearnt = [["hello", "world"]];
    const wordsStudied = null;

    const result = newWords(wordsLearnt, wordsStudied);

    expect(result).to.deep.equal([]);
  });

  it("returns an empty array if wordsStudied is an empty array", () => {
    const wordsLearnt = [["hello", "world"]];
    const wordsStudied = [];

    const result = newWords(wordsLearnt, wordsStudied);

    expect(result).to.deep.equal([]);
  });

  it("filters out words that are in wordsLearnt", () => {
    const wordsLearnt = [["hello", "world"]];
    const wordsStudied = [["hello", "world"], ["goodbye", "world"]];

    const result = newWords(wordsLearnt, wordsStudied);

    expect(result).to.deep.equal([["goodbye", "world"]]);
  });

  it("returns all words if none of them are in wordsLearnt", () => {
    const wordsLearnt = [["hello", "world"]];
    const wordsStudied = [["goodbye", "morning"], ["hello", "morning"], ["world", "morning"]];

    const result = newWords(wordsLearnt, wordsStudied);

    expect(result).to.deep.equal([["goodbye", "morning"], ["hello", "morning"], ["world", "morning"]]);
  });

  it("filters out duplicates from the final array", () => {
    const wordsLearnt = [["hello", "world"], ["goodbye", "world"]];
    const wordsStudied = [["goodbye", "world"], ["hello", "world"], ["goodbye", "world"]];

    const result = newWords(wordsLearnt, wordsStudied);

    expect(result).to.deep.equal([]);
  });
});