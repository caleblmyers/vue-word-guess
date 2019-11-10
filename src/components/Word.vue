<template>
  <div>{{name}}</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: ['name'],
})
export default class Word extends Vue {
  guess = ''

  created() {
    window.addEventListener('keypress', this.keyPress);
  }
  detroyed() {
    window.removeEventListener('keypress', this.keyPress);
  }
  keyPress(e) {
    if (e.key.toUpperCase() !== e.key.toLowerCase()) {
      this.guess = e.key;
      this.answer.makeGuess(e.key);
      this.answer.update();
      this.display = this.answer.update();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
