// const newWords = (wordsLearnt, wordsStudied) => {
//   if (!wordsStudied || wordsStudied.length === 0) {
//     return [];
//   } else {
//     return wordsStudied.filter((word) => !wordsLearnt.includes(word));
//   }
// };
const newWords = (wordsLearnt, wordsStudied) => {
  if (!wordsStudied || wordsStudied.length === 0) {
    return [];
  } else {
    const filteredWords = wordsStudied.filter((pair) => {
      return !wordsLearnt.some((learnedPair) => {
        return pair[0] === learnedPair[0] && pair[1] === learnedPair[1];
      });
    });
    const uniqueWords = Array.from(new Set(filteredWords.map(pair => pair.join(',')))).map(str => str.split(','));
    return uniqueWords;
  }
};

export { newWords };
