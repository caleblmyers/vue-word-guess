<template>
  <div class="home">
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
import { Component, Vue } from "vue-property-decorator";
import Game from "@/components/Game.vue";

@Component({
  name: "home",
  components: {
    Game
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

</style>
