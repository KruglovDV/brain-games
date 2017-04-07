import startGame from '../gameFlow';
import { getRandNumber, isEven } from '../common';

const getQuestAndAnsw = () => {
  const quest = getRandNumber();
  const answ = isEven(quest) ? 'yes' : 'no';
  return { question: quest, answer: answ };
};

export default () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  startGame(rule, getQuestAndAnsw);
};
