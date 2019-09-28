<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">ASOIAF Word Guess</h1>
        <p class="lead">Guess character names, or Great Houses of Westeros!</p>
      </div>
    </div>
    <Game />
  </div>
</template>

<script>
import Game from "./components/Game";

export default {
  name: "app",
  components: {
    Game
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
