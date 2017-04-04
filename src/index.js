import readlineSync from 'readline-sync';

export default () => {
  const usersName = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${usersName}`);
};
