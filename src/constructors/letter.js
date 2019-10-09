function Letter(char) {
  this.char = char
  this.isGuessed = false
  // if (this.char === " ") this.isGuessed = true
}

Letter.prototype.toString = function () {
  if (this.char === " ") {
    return "  "
  } else {
    if (this.isGuessed) {
      return this.char + " "
    } else {
      return "_ "
    }
  }
}

Letter.prototype.check = function (upper, lower) {
  if (upper === this.char || lower === this.char) {
    this.isGuessed = true
    return true
  }
  return false
}

export default Letter