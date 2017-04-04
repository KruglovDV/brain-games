import readlineSync from 'readline-sync';
import showGreeting from './index';

const makeRandNamber = () => {
  const to = 100;
  return Math.ceil(Math.random() * to);
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = showGreeting();
  for (let i = 0; i < 3; i += 1) {
    const number = makeRandNamber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== usersAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
