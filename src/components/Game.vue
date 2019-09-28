<template>
  <div>
    <h1>Game</h1>
    <button class="btn btn-info" v-on:click="startGame">Start!</button>
    <div>{{data.name}}</div>
    <div>{{data.gender}}</div>
    <div>{{data.culture}}</div>
    <div>{{data.born}}</div>
    <div>{{data.died}}</div>
    <div>{{data.titles}}</div>
    <div>{{data.aliases}}</div>
    <div>{{data.father}}</div>
    <div>{{data.mother}}</div>
    <div>{{data.spouse}}</div>
    <div>{{data.allegiances}}</div>
    <div>{{data.books}}</div>
    <div>{{data.povBooks}}</div>
    <div>{{data.tvSeries}}</div>
    <div>{{data.playedBy}}</div>
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
      data: {},
      err: {}
    };
  },
  methods: {
    startGame() {
      let randIndex = Math.floor(Math.random() * 2126 + 12);
      if (randIndex === 583) randIndex = Math.floor(Math.random() * 900 + 584);
      axios
        .get(`https://anapioficeandfire.com/api/characters/${randIndex}`)
        .then(res => {
          this.answer = new Word(res.data.name);
          this.data = res.data;
        })
        .catch(err => (this.err = err));
    }
  }
};
</script>

<style scoped>
</style>