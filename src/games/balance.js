import makeGame from '../gameFlow';
import getRandNumber from '../common';

const sortPred = (a, b) => (a > b ? 1 : -1);

const getAnswer = (acc) => {
  const sortedMas = acc.sort(sortPred);
  const firstDigIdx = 0;
  const lastDigIdx = sortedMas.length - 1;
  if (sortedMas[firstDigIdx] === sortedMas[lastDigIdx] ||
      sortedMas[firstDigIdx] === sortedMas[lastDigIdx] - 1) {
    return acc;
  }
  sortedMas[firstDigIdx] += 1;
  sortedMas[lastDigIdx] -= 1;
  return getAnswer(sortedMas);
};

const getQuestAndAnsw = () => {
  const question = getRandNumber(100, 10000);
  const masOfDigits = question.toString().split('')
  .map(el => Number(el));
  const answer = getAnswer(masOfDigits).join('');
  return { quest: question, answ: answer };
};

export default () => {
  const rule = 'Balance the given number.';
  makeGame(rule, getQuestAndAnsw);
};
