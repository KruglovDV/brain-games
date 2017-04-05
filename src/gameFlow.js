import readlineSync from 'readline-sync';
import { showGreeting, askName, showWelcome, showRule } from './index';

const makeRound = (userName, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:  ');
  if (correctAnswer !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const iterator = (userName, questions, answers, acc, stop) => {
  if (acc === stop) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const question = questions[acc];
  const answer = answers[acc].toString();
  const isCorrect = makeRound(userName, question, answer);
  if (!isCorrect) {
    return;
  }
  iterator(userName, questions, answers, acc + 1, stop);
};

export default (rule, questions, answers, rounds) => {
  const start = 0;
  showWelcome();
  showRule(rule);
  const userName = askName();
  showGreeting(userName);
  iterator(userName, questions, answers, start, rounds);
};
