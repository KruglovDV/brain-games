import makeGame from '../gameFlow';

const getRandNumber = () => {
  const to = 100;
  return Math.ceil(Math.random() * to);
};

const isEven = number => number % 2 === 0;

const makeQuestion = () => getRandNumber();

const makeAnswer = question => (isEven(question) ? 'yes' : 'no');

export default () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  makeGame(rule, makeQuestion, makeAnswer);
};
