import makeGame from '../gameFlow';
import getRandNumber from '../common';

const getQuestAndAnsw = () => {
  const a = getRandNumber();
  const b = getRandNumber();
  let answer;
  const numForRandOperation = getRandNumber();
  if (numForRandOperation < 33) {
    answer = a + b.toString();
    return { quest: `${a} + ${b}`, answ: answer };
  } else if (numForRandOperation > 33 && numForRandOperation < 66) {
    answer = a - b.toString();
    return { quest: `${a} - ${b}`, answ: a - b };
  }
  answer = a * b.toString();
  return { quest: `${a} * ${b}`, answ: a * b };
};

export default () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, getQuestAndAnsw);
};
