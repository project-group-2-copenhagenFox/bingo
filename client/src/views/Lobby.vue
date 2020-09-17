<template>
  <div class="jumbotron bg-light">
    <h1 class="display-4">Hallo, selamat datang di BingoBoard!</h1>
    <p class="lead">BingoBoard adalah permainan yang bisa kamu mainkan bersama temanmu. Kamu dan temanmu akan diberikan <span class="badge badge-success p-1">25</span> angka acak pada sebuah papan. Perhatikan setiap <span class="badge badge-success p-1">angka random</span> yang diberikan sistem ketika permainan dimulai, jika <span class="badge badge-success p-1">angka random</span> yang ditampilkan tersebut ada di papan permainanmu, <span class="badge badge-success p-1">klik angka tersebut</span> sebelum waktunya habis. Ulangi sampai <span class="badge badge-success p-1">angka terpilih</span> di papan permainanmu membentuk <span class="badge badge-success p-1">garis lurus</span> secara <span class="badge badge-success p-1">horizontal, vertical atau diagonal</span> kemudian klik <span class="badge badge-success p-1">BINGO</span> untuk klaim kemenanganmu.</p>
    <hr class="my-4">
    <p>Masukan <i>nickname</i> kemenanganmu disini.</p>
    <form @submit.prevent="sendNickname" action="">
        <input v-model="nickName" type="text" placeholder="nickname...">
        <p class="lead mt-2">
            <button class="btn btn-primary" type="submit">Mulai</button>
        </p>
    </form>

</div>
</template>

<script>
export default {
  name: 'Lobby',
  data() {
    return {
      nickName: ''
    }
  },
  sockets: {
    board (payload) {
      console.log(payload)
      this.$store.commit('setBoards', payload)
    },
      saveboard (payload) {
       console.log(payload, `<<<<<<< saveboard`)
        this.$store.commit('setBoards', payload)
      }
  },
  methods: {
    sendNickname () {
      this.$socket.emit('nickName', { nickName: this.nickName})
      // this.$socket.emit('saveboards')
      localStorage.setItem('nickname', this.nickName)
      this.$router.push({ name: 'Home' })
    },

  }
}
</script>

<style>

</style>
