//temporary words learnt (can be replaced with real wordslearnt once implemented)
let wordsLearnt = ["ごめんなさい"];

const coinCalculator = (score) => {
  switch (score) {
    case 7:
      return 70;
    case 8:
      return 80;
    case 9:
      return 100;
    case 10:
      return 200;
    default:
      return 10;
  }
};

function calculateLevel(xp) {
  let level;
  switch (true) {
    case xp < 500:
      level = 1;
      break;
    case xp < 1500:
      level = 2;
      break;
    case xp < 3000:
      level = 3;
      break;
    case xp < 5000:
      level = 4;
      break;
    case xp < 8000:
      level = 5;
      break;
    case xp < 12000:
      level = 6;
      break;
    case xp < 17000:
      level = 7;
      break;
    case xp < 23000:
      level = 8;
      break;
    case xp < 30000:
      level = 9;
      break;
    case xp < 38000:
      level = 10;
      break;
    case xp < 47000:
      level = 11;
      break;
    case xp < 57000:
      level = 12;
      break;
    case xp < 68000:
      level = 13;
      break;
    case xp < 80000:
      level = 14;
      break;
    default:
      level = 15;
  }
  return level;
}

const calculateXP = (wordsStudied) => {
  let xp = 0;
  wordsStudied.forEach((element) => {
    if (wordsLearnt.includes(element)) {
      xp += 1;
    } else {
      xp += 10;
    }
  });

  return xp;
};

export { coinCalculator, calculateLevel, calculateXP };
