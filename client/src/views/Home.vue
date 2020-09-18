<template>
<div>
  <div class="row">
    <div class="col">
      <div class="justify-content-center">Score: <h1>{{score}}</h1></div>
    </div>
    <div class="col">
      <div class="justify-content-center">Random: <h1>{{ranNum}}</h1></div>
    </div>
    <div class="col">
      <div class="justify-content-center"><button v-if="button===true" @click.prevent="sendScore" class="btn-lg btn-success">Finish</button></div>
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
import swal from 'sweetalert'

export default {
  name: 'Home',
  data () {
    return {
      players: this.$store.state.players,
      button:false,
      winner: ''
    }
  },
  computed: {
    boards () {
      console.log(this.$store.state.boards)
      return this.$store.state.boards
    },
    ranNum(){
      return this.$store.state.ranNum
    },
    score(){
      return this.$store.state.score
    }

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
        this.$store.commit('setRanNum', payload)
        if (!payload) {
          this.$socket.emit('score', { nickName: localStorage.nickname, count: this.score})
        }
      },
      toogleButton(){
        this.button = true
      },
      winner (payload) {
        console.log(payload)
        // this.$store.commit('showWinner', payload[payload.length - 1].nickName)
        this.winner = payload[payload.length - 1].nickName
        swal("Good job!", `The winner is ${this.winner}`, "success");
      }
  },
  components: {
    Board
  },
  methods:{
    sendScore(){
      console.log( { nickName: localStorage.nickname, count: this.score}, `<<<<<<< klik finsih`)
      this.$socket.emit('score', { nickName: localStorage.nickname, count: this.score})
      
    }
  }
}
</script>

<style>
</style>
