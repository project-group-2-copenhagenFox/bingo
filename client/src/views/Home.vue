<template>
<div>
  <div class="row">
    <div class="col">
      <div class="justify-content-center">Timeout: <h1>00:05</h1></div>
    </div>
    <div class="col">
      <div class="justify-content-center">Random: <h1>75</h1></div>
    </div>
    <div class="col">
      <div class="justify-content-center"><button class="btn-lg btn-success">BINGO</button></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div v-for="(player, i) in players" :key="i">
      <div class="col-6 col-sm-3">.<Board :player="player"/></div>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  name: 'Home',
  data () {
    return {
      players: this.$store.state.players
    }
  },
  components: {
    Board
  }
}
</script>

<style>
</style>
