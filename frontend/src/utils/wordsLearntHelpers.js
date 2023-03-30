const newWords = (wordsLearnt, wordsStudied) => {
  if (!wordsStudied || wordsStudied.length === 0) {
    return [];
  } else {
    return wordsStudied.filter((word) => !wordsLearnt.includes(word));
  }
};

export { newWords };
