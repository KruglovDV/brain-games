import startGame from '../gameFlow';
import { getRandNumber } from '../common';

const isPrime = (number, sqrt, div) => {
  if (div === sqrt || number === 2) {
    return true;
  } else if (number % div === 0) {
    return false;
  }
  return isPrime(number, sqrt, div + 1);
};

const getQuestAndAnsw = () => {
  const quest = getRandNumber();
  const div = 2;
  const sqrt = Math.round(Math.sqrt(quest));
  const answ = isPrime(quest, sqrt, div) ? 'yes' : 'no';
  return { question: quest, answer: answ };
};

export default () => {
  const rule = 'Answer "yes" if number prime otherwise answer "no".';
  startGame(rule, getQuestAndAnsw);
};
