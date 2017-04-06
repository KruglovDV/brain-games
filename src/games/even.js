import makeGame from '../gameFlow';
import getRandNumber from '../common';

const isEven = number => number % 2 === 0;

const getQuestAndAnsw = () => {
  const question = getRandNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return { quest: question, answ: answer };
};

export default () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  makeGame(rule, getQuestAndAnsw);
};
