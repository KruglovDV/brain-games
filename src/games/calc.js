import makeGame from '../gameFlow';
import getRandNumber from '../common';

const getQuestAndAnsw = () => {
  const a = getRandNumber();
  const b = getRandNumber();
  const numForRandOperation = getRandNumber();
  if (numForRandOperation < 33) {
    return { quest: `${a} + ${b}`, answ: a + b };
  } else if (numForRandOperation > 33 && numForRandOperation < 66) {
    return { quest: `${a} - ${b}`, answ: a - b };
  }
  return { quest: `${a} * ${b}`, answ: a * b };
};

export default () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, getQuestAndAnsw);
};
