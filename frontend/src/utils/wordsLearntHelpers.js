//temporary words learnt (can be replaced with real wordslearnt once implemented)

const newWords = (wordsLearnt, wordsStudied) => {
  return wordsStudied.filter((word) => {
    if (!wordsLearnt.includes(word)) {
      return word + ", ";
    }
  });
};

export { newWords };
