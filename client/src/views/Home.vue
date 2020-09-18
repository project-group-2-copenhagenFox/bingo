<template>
<div>
  <div class="row">
    <div class="col">
      <div class="justify-content-center">Timeout: <h1>00:05</h1></div>
    </div>
    <div class="col">
      <div class="justify-content-center">Random: <h1></h1></div>
    </div>
    <div class="col">
      <div class="justify-content-center"><button class="btn-lg btn-success">BINGO</button></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div v-for="(board, i) in boards" :key="i">
      <div class="col-6 col-sm-3">.<Board :board="board"/></div>
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
  computed: {
    boards () {
      console.log(this.$store.state.boards)
      return this.$store.state.boards
    },

  },
  sockets: {
      board (payload) {
      console.log(payload, `<<<<<<< board`)
      this.$store.commit('setBoards', payload)
    },
      saveboard (payload) {
        console.log(payload, `<<<<<<< saveboard`)
        this.$store.commit('setBoards', payload)
    },
      randomNumber (payload) {
        console.log(payload, '<<<<<<<<randomNmber')
        // this.$store.commit('setRanNum', payload)
      }
  },
  components: {
    Board
  }
}
</script>

<style>
</style>
