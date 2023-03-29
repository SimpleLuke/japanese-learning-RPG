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

export default coinCalculator;
