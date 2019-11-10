<template>
  <div>
    <div>{{display}}</div>

    <div v-if="!gameOver">
      <div>There are {{remaining}} letters remaining</div>
      <div>You guessed {{guess}}</div>
      <div>You have {{lives}} guesses left!</div>
    </div>
    <div v-else>
      <div>Game Over!!!</div>
      <div v-if="remaining === 0">You guessed the word!</div>
      <div v-if="lives === 0">You ran out of lives!</div>
    </div>
    <br />
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Word extends Vue {
  @Prop()
  answer;
  guess = "";
  guesses = [];
  lives = 10;
  gameOver = false;

  get remaining() {
    let remaining = 0;
    this.answer.forEach(char => (char.isGuessed ? null : remaining++));
    return remaining;
  }

  get display() {
    let display = "";
    this.answer.forEach(char => {
      display += char.isGuessed ? char.char : "_ ";
    });
    return display;
  }

  created() {
    window.addEventListener("keypress", this.keyPress);
  }
  beforeUpdate() {
    if (this.remaining === 0 || this.lives === 0) {
      this.gameOver = true;
      window.removeEventListener("keypress", this.keyPress);
    }
  }
  beforeDestroy() {
    window.removeEventListener("keypress", this.keyPress);
  }
  keyPress(e) {
    if (e.key.toUpperCase() !== e.key.toLowerCase() && e.key !== "Enter") {
      this.guess = e.key;
      if (!this.guesses.includes(e.key)) {
        this.guesses.push(e.key);
        this.makeGuess(this.guess);
      }
    }
  }
  makeGuess(guess) {
    let correct = false;
    const upper = guess.toUpperCase();
    const lower = guess.toLowerCase();

    this.answer.forEach((char, index) => {
      if (char.char === upper || char.char === lower) {
        correct = true;
        this.answer[index].isGuessed = true;
      }
    });
    if (!correct) {
      this.lives--;
    }
    console.log(guess, "is", correct);
    return correct;
  }
  reveal() {
    for (let i = 0; i < charArray.length; i + 1) {
      charArray[i].isGuessed = true;
    }
    let wordDisplay = "";
    this.charArray.forEach(char => {
      wordDisplay += char;
    });

    return wordDisplay;
  }
}
</script>

<style lang="scss" scoped>
</style>
