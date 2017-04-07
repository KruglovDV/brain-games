import makeGame from '../gameFlow';
import getRandNumber from '../common';

const getQuestAndAnsw = () => {
  const a = getRandNumber();
  const b = getRandNumber();
  const numForRandOperation = getRandNumber();
  if (numForRandOperation < 33) {
    const answer = a + b;
    return { question: `${a} + ${b}`, answer: answer.toString() };
  } else if (numForRandOperation > 33 && numForRandOperation < 66) {
    const answer = a - b;
    return { question: `${a} - ${b}`, answer: answer.toString() };
  }
  const answer = a * b;
  return { question: `${a} * ${b}`, answer: answer.toString() };
};

export default () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, getQuestAndAnsw);
};
