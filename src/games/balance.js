import makeGame from '../gameFlow';
import getRandNumber from '../common';

const sortPred = (a, b) => (a > b ? 1 : -1);

const getAnswer = (acc) => {
  const sortedMasDigits = acc.sort(sortPred);
  const firstDigIdx = 0;
  const lastDigIdx = sortedMasDigits.length - 1;
  if (sortedMasDigits[firstDigIdx] === sortedMasDigits[lastDigIdx] ||
      sortedMasDigits[firstDigIdx] === sortedMasDigits[lastDigIdx] - 1) {
    return acc;
  }
  sortedMasDigits[firstDigIdx] += 1;
  sortedMasDigits[lastDigIdx] -= 1;
  return getAnswer(sortedMasDigits);
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
