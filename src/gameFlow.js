import readlineSync from 'readline-sync';

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
  const answer = answers[acc];
  const isCorrect = makeRound(userName, question, answer);
  if (!isCorrect) {
    return;
  }
  iterator(userName, questions, answers, acc + 1, stop);
};

export default (questions, answers, rounds) => {
  const start = 0;
  const userName = readlineSync.question('May I have your name: ');
  iterator(userName, questions, answers, start, rounds);
};
