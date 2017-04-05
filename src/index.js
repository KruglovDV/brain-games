import readlineSync from 'readline-sync';

export const showWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const showRule = (ruleText) => {
  console.log(`${ruleText}\n`);
};

export const makeRandNamber = () => {
  const to = 100;
  return Math.ceil(Math.random() * to);
};

export const showGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const askName = () => readlineSync.question('May I have your name: ');

export const makeGame = () => {
  showWelcome();
  const userName = askName();
  showGreeting(userName);
};
