import makeGame from '../gameFlow';

const getRandNumber = () => {
  const to = 100;
  return Math.ceil(Math.random() * to);
};

const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

const getQuestion = () => {
  const a = getRandNumber();
  const b = getRandNumber();
  return `${a} ${b}`;
};

const getAnswer = (question) => {
  const a = 0;
  const b = 1;
  const parsedQuest = question.split(' ');
  const questA = Number(parsedQuest[a]);
  const questB = Number(parsedQuest[b]);
  return gcd(questA, questB);
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  makeGame(rule, getQuestion, getAnswer);
};
