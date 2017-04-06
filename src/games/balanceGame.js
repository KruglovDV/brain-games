import makeGame from '../gameFlow';

const getQuestion = () => {
  const min = 100;
  const max = 10000;
  return Math.ceil((Math.random() * (max - min)) + min);
};

const sortPred = (a, b) => (a > b ? 1 : -1);

const iterator = (acc) => {
  const sortedMas = acc.sort(sortPred);
  const firstDigIdx = 0;
  const lastDigIdx = sortedMas.length - 1;
  if (sortedMas[firstDigIdx] === sortedMas[lastDigIdx] ||
      sortedMas[firstDigIdx] === sortedMas[lastDigIdx] - 1) {
    return acc;
  }
  sortedMas[firstDigIdx] += 1;
  sortedMas[lastDigIdx] -= 1;
  return iterator(sortedMas);
};

const getAnswer = (question) => {
  const masOfDigits = question.toString().split('')
  .map(el => Number(el));
  return iterator(masOfDigits).join('');
};

export default () => {
  const rule = 'Balance the given number.';
  makeGame(rule, getQuestion, getAnswer);
};
