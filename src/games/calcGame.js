import makeGame from '../gameFlow';

const getRandNumber = () => {
  const to = 100;
  return Math.ceil(Math.random() * to);
};

const getQuestion = () => {
  const a = getRandNumber();
  const b = getRandNumber();
  const numForRandOperation = getRandNumber();
  if (numForRandOperation < 33) {
    return `${a} + ${b}`;
  } else if (numForRandOperation > 33 && numForRandOperation < 66) {
    return `${a} - ${b}`;
  }
  return `${a} * ${b}`;
};

const getAnswer = (question) => {
  const a = 0;
  const b = 2;
  const operator = 1;
  const parsedQuest = question.split(' ');
  const questOperator = parsedQuest[operator];
  const questA = Number(parsedQuest[a]);
  const questB = Number(parsedQuest[b]);
  if (questOperator === '+') {
    return questA + questB;
  } else if (questOperator === '-') {
    return questA - questB;
  }
  return questA * questB;
};

export default () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, getQuestion, getAnswer);
};
