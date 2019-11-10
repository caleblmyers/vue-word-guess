<template>
  <div v-if="roundActive">
    <!-- <div>{{data.name}}</div>
    <div>{{display}}</div>
    <div>{{guess}}</div>
    <div>{{err}}</div>-->
    <WordComp :name="data.name" />
    <button class="btn btn-danger mt-5" v-on:click="reset">Start Over</button>
  </div>
  <div v-else>
    <h1>Game</h1>
    <div>{{err}}</div>
    <button class="btn btn-info" v-on:click="startGame">Start!</button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Word from "../constructors/Word";
import WordComp from "./Word.vue";

@Component({
  name: "Game",
  components: {
    WordComp
  },
})
export default class Game extends Vue {
  answer = {}
  display = ""
  data = {}
  err = {}
  roundActive = false
  guess = ""
  lives = 10

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
      .catch(err => {
        this.err = err;
      });
  }

  reset() {
    this.roundActive = false;
    this.display = "";
  }
}
</script>

<style lang="scss" scoped>

</style>
