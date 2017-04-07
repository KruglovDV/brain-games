import readlineSync from 'readline-sync';

const rounds = 3;

const startGame = (getQuestAndAnsw, acc) => {
  if (acc === 0) {
    return true;
  }
  const questAndAnsw = getQuestAndAnsw();
  console.log(`Question: ${questAndAnsw.question}\n`);
  const answer = readlineSync.question('Your answer:  ');
  if (questAndAnsw.answer !== answer) {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${questAndAnsw.answer}'!\n`);
    return false;
  }
  console.log('\nCorrect!\n');
  return startGame(getQuestAndAnsw, acc - 1);
};

export default (rule, getQuestAndAnsw) => {
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name: ');
  console.log(`\nHello, ${userName}!\n`);
  if (startGame(getQuestAndAnsw, rounds)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};
