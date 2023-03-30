//temporary words learnt (can be replaced with real wordslearnt once implemented)
let wordsLearnt = ["ごめんなさい", "ありがとう", "おはよう", "すみません"];

const newWords = (wordsStudied) => {
  return wordsStudied.filter((word) => {
    if (!wordsLearnt.includes(word)) {
      return word + ", ";
    }
  });
};

export { newWords };
