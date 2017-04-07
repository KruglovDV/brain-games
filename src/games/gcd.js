import makeGame from '../gameFlow';
import getRandNumber from '../common';

const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

const getQuestAndAnsw = () => {
  const a = getRandNumber();
  const b = getRandNumber();
  return { question: `${a} ${b}`, answer: gcd(a, b).toString() };
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  makeGame(rule, getQuestAndAnsw);
};
