import makeGame from './gameFlow';
import makeRandNamber from './index';

const isEven = number => number % 2 === 0;

const makeQuestions = (amountOfquestions) => {
  const questions = [];
  for (let i = 0; i < amountOfquestions; i += 1) {
    questions.push(makeRandNamber());
  }
  return questions;
};

const makeAnswers = (amountOfAnswers, questions) => {
  const answers = [];
  for (let i = 0; i < amountOfAnswers; i += 1) {
    if (isEven(questions[i])) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }
  return answers;
};

export default () => {
  const rounds = 3;
  const questions = makeQuestions(rounds);
  const answers = makeAnswers(rounds, questions);
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  makeGame(questions, answers, rounds);
};
