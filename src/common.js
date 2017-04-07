export const getRandNumber = (from = 0, to = 100) => {
  const min = from;
  const max = to;
  return Math.ceil((Math.random() * (max - min)) + min);
};

export const isEven = number => number % 2 === 0;
