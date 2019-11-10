<template>
  <div v-if="data.name">
    <Word :answer="answer" />
    <button class="btn btn-danger mt-5" @click="reset">Start Over</button>
  </div>
  <div v-else>
    <h1>Game</h1>
    <div v-if="err">{{err}}</div>
    <button class="btn btn-info" @click="startGame">Easy: Houses</button>
    <button class="btn btn-danger" @click="startGame">Hard: All Characters</button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
// import WordType from "@/constructors/Word";
import Word from "./Word.vue";

@Component({
  name: "Game",
  components: {
    Word
  }
})
export default class Game extends Vue {
  answer = [];
  data = {};
  err;
  roundActive = false;
  guess = "";

  startGame() {
    let randIndex = Math.floor(Math.random() * 2126 + 12);
    if (randIndex === 583) randIndex = Math.floor(Math.random() * 900 + 584);
    axios
      .get(`https://anapioficeandfire.com/api/characters/${randIndex}`)
      .then(res => {
        for (const char of res.data.name) {
          this.answer.push({ char, isGuessed: false });
        }
        this.answer.forEach((char, index) => {
          if (char.char === " ") this.answer[index].isGuessed = true;
        });
        this.data = res.data;
      })
      .catch(err => {
        this.err = err;
      });
  }

  reset() {
    this.roundActive = false;
    this.data = {};
    this.answer = [];
    this.err = null;
  }
}
</script>

<style lang="scss" scoped>
</style>
