<template>
  <div v-if="roundActive">
    <div>{{data.name}}</div>
    <div>{{display}}</div>
    <div>{{guess}}</div>
    <div>{{err}}</div>
    <button class="btn btn-danger" v-on:click="reset">Start Over</button>
  </div>
  <div v-else>
    <h1>Game</h1>
    <div>{{err}}</div>
    <button class="btn btn-info" v-on:click="startGame">Start!</button>
  </div>
</template>

<script>
import axios from "axios";
import Word from "../constructors/word";

export default {
  name: "Game",
  data() {
    return {
      answer: {},
      display: ``,
      data: {},
      err: {},
      roundActive: false,
      guess: ""
    };
  },
  created() {
    window.addEventListener("keypress", this.keyPress);
  },
  detroyed() {
    window.removeEventListener("keypress", this.keyPress);
  },
  methods: {
    keyPress(e) {
      if (isNaN(e.key) === true && e.key.toUpperCase() != e.key.toLowerCase()) {
        this.guess = e.key;
        console.log(e.key);
        console.log(this.answer.makeGuess(e.key));
        console.log(this.answer.update());
        this.display = this.answer.update();
      }
    },
    reset() {
      this.roundActive = false;
      this.display = "";
    },
    startGame() {
      let randIndex = Math.floor(Math.random() * 2126 + 12);
      if (randIndex === 583) randIndex = Math.floor(Math.random() * 900 + 584);
      axios
        .get(`https://anapioficeandfire.com/api/characters/${randIndex}`)
        .then(res => {
          this.answer = new Word(res.data.name);
          this.display = this.answer.update();
          this.data = res.data;
          this.roundActive = true;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
</style>