import readlineSync from 'readline-sync';

const rounds = 3;

const makeRound = (questAndAnsw) => {
  console.log(`Question: ${questAndAnsw.quest}\n`);
  const answer = readlineSync.question('Your answer:  ');
  if (questAndAnsw.answ !== answer) {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${questAndAnsw.answ}'!\n`);
    return false;
  }
  console.log('\nCorrect!\n');
  return true;
};

const startGame = (getQuestAndAnsw, acc) => {
  if (acc === rounds) {
    return true;
  }
  return makeRound(getQuestAndAnsw()) ?
    startGame(getQuestAndAnsw, acc + 1) : false;
};

export default (rule, getQuestAndAnsw) => {
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name: ');
  console.log(`\nHello, ${userName}!\n`);
  if (startGame(getQuestAndAnsw, 0)) {
    console.log(`Congratulations, ${userName}!`);
  }
  console.log(`Let's try again, ${userName}`);
};
