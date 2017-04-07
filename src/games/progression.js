import startGame from '../gameFlow';
import { getRandNumber } from '../common';

const progressionLength = 10;

const getProgress = (prevElem, step, count, acc) => {
  if (count === 0) {
    return acc;
  }
  const nextElem = prevElem + step;
  acc.push(nextElem);
  return getProgress(nextElem, step, count - 1, acc);
};

const getQuestAndAnsw = () => {
  const firstDigit = getRandNumber(0, 100);
  const step = getRandNumber(0, 100);
  const questPosition = getRandNumber(0, 9);
  const progression = getProgress(firstDigit, step, progressionLength, []);
  const answ = progression[questPosition].toString();
  progression[questPosition] = '..';
  return { question: progression.join(' '), answer: answ };
};

export default () => {
  const rule = 'What number is missing in this progression?';
  startGame(rule, getQuestAndAnsw);
};
