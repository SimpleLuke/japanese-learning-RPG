const newWords = (wordsLearnt, wordsStudied) => {
  console.log("newWords, wordsLearnt = :", wordsStudied);
  if (!wordsStudied || wordsStudied.length === 0) {
    console.log("if triggered");
    return [];
  } else {
    console.log("else triggered");
    return wordsStudied.filter((word) => !wordsLearnt.includes(word));
  }
};

export { newWords };
