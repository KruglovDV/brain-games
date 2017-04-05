import makeGame from '../gameFlow';
import { makeRandNamber } from '../index';

const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

const makeQuestionsAndAnswers = (amount) => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < amount; i += 1) {
    const a = makeRandNamber();
    const b = makeRandNamber();
    questions.push(`${a} ${b}`);
    answers.push(gcd(a, b));
  }
  return { quest: questions, answ: answers };
};

const rounds = 3;
const answersAndQuestions = makeQuestionsAndAnswers(rounds);
const questions = answersAndQuestions.quest;
const answers = answersAndQuestions.answ;

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.?';
  makeGame(rule, questions, answers, rounds);
};
