import startGame from '../gameFlow';
import { getRandNumber, isEven } from '../common';

const isPrime = (number, sqrt, div) => {
  if (div === sqrt) {
    return true;
  } else if (number % div === 0) {
    return false;
  }
  return isPrime(number, sqrt, div + 1);
};

const getQuestAndAnsw = () => {
  const quest = getRandNumber();
  if (isEven(quest) && quest !== 2) {
    return { question: quest, answer: 'no' };
  } else if (quest === 2) {
    return { question: quest, answer: 'yes' };
  }
  const sqrt = Math.round(Math.sqrt(quest));
  const answ = isPrime(quest, sqrt, 2) ? 'yes' : 'no';
  return { question: quest, answer: answ };
};

export default () => {
  const rule = 'Answer "yes" if number prime otherwise answer "no".';
  startGame(rule, getQuestAndAnsw);
};
