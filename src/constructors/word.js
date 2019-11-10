import Letter from './Letter';

function Word(str) {
  this.lives = 10;
  this.remaining = str.length;
  this.charArray = [];
  for (let i = 0; i < str.length; i + 1) {
    this.charArray.push(new Letter(str[i]));
  }
}

Word.prototype.update = () => {
  let wordDisplay = '';

  this.remaining = 0;
  this.charArray.forEach((char) => {
    if (char.isGuessed) wordDisplay += `${char.char} `;
    else {
      this.remaining += 1;
      wordDisplay += '_ ';
    }
  });

  return wordDisplay;
};

Word.prototype.makeGuess = (guess) => {
  let correct = false;
  const upper = guess.toUpperCase();
  const lower = guess.toLowerCase();

  this.charArray.forEach((char) => {
    if (char.check(upper, lower) === true) {
      correct = true;
    }
  });
  return correct;
};

Word.prototype.reveal = () => {
  for (let i = 0; i < charArray.length; i + 1) {
    charArray[i].isGuessed = true;
  }
  let wordDisplay = '';
  this.charArray.forEach((char) => {
    wordDisplay += char;
  });

  return wordDisplay;
};

export default Word;
