import readlineSync from 'readline-sync';

const makeRound = (userName, question, correctAnswer) => {
  console.log(`Question: ${question}\n`);
  const answer = readlineSync.question('Your answer:  ');
  if (correctAnswer !== answer) {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!\n`);
    return false;
  }
  console.log('\nCorrect!\n');
  return true;
};

const iterator = (userName, getQuestion, getAnswer, acc, stop) => {
  if (acc === stop) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const question = getQuestion();
  const answer = getAnswer(question).toString();
  const isCorrect = makeRound(userName, question, answer);
  if (!isCorrect) {
    return;
  }
  iterator(userName, getQuestion, getAnswer, acc + 1, stop);
};

export default (rule, getQuestion, getAnswer) => {
  const start = 0;
  const stop = 3;
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name: ');
  console.log(`\nHello, ${userName}!\n`);
  iterator(userName, getQuestion, getAnswer, start, stop);
};
