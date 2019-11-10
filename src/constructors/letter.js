function Letter(char) {
  this.char = char;
  this.isGuessed = false;
  // if (this.char === " ") this.isGuessed = true
}

Letter.prototype.toString = () => {
  if (this.char === ' ') {
    return '  ';
  }
  if (this.isGuessed) {
    return `${this.char} `;
  }
  return '_ ';
};

Letter.prototype.check = (upper, lower) => {
  if (upper === this.char || lower === this.char) {
    this.isGuessed = true;
    return true;
  }
  return false;
};

export default Letter;
