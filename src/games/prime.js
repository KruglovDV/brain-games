import startGame from '../gameFlow';
import { getRandNumber } from '../common';


const isPrime = (number) => {
  const sqrt = Math.round(Math.sqrt(number));
  for (let div = 2; div < sqrt; div += 1) {
    if (number % div === 0) {
      return false;
    }
  }
  return true;
};

const getQuestAndAnsw = () => {
  const quest = getRandNumber();
  const answ = isPrime(quest) ? 'yes' : 'no';
  return { question: quest, answer: answ };
};

export default () => {
  const rule = 'Answer "yes" if number prime otherwise answer "no".';
  startGame(rule, getQuestAndAnsw);
};
