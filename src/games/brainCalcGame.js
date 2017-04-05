import makeGame from '../gameFlow';
import { makeRandNamber } from '../index';

const makeQuestionsAndAnswers = (amount) => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < amount; i += 1) {
    const a = makeRandNamber();
    const b = makeRandNamber();
    const randOpreation = makeRandNamber();
    if (randOpreation < 33) {
      questions.push(`${a} + ${b}`);
      answers.push(a + b);
    } else if (randOpreation > 33 && randOpreation < 66) {
      questions.push(`${a} - ${b}`);
      answers.push(a - b);
    } else {
      questions.push(`${a} * ${b}`);
      answers.push(a * b);
    }
  }
  return { quest: questions, answ: answers };
};

const rounds = 3;
const answersAndQuestions = makeQuestionsAndAnswers(rounds);
const questions = answersAndQuestions.quest;
const answers = answersAndQuestions.answ;

export default () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, questions, answers, rounds);
};
