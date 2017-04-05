import readlineSync from 'readline-sync';

export const showGreeting = () => {
  const usersName = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${usersName}`);
  return usersName;
};

export const makeRandNamber = () => {
  const to = 100;
  return Math.ceil(Math.random() * to);
};
