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
    return wordsStudied.filter((pair) => {
      return !wordsLearnt.some((learnedPair) => {
        return pair[0] === learnedPair[0] && pair[1] === learnedPair[1];
      });
    });
  }
};

export { newWords };
