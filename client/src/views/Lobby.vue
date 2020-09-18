<template>
  <div class="jumbotron bg-light">
    <h1 class="display-4">Hallo, selamat datang di BingoBoard Yeay!</h1>
    <p class="lead">BingoBoard Yeay adalah permainan yang bisa kamu mainkan bersama temanmu. Kamu dan temanmu akan diberikan <span class="badge badge-success p-1">25</span> angka acak pada sebuah papan. Perhatikan setiap <span class="badge badge-success p-1">angka random</span> yang diberikan sistem ketika permainan dimulai, <span class="badge badge-success p-1">angka random</span> yang ditampilkan tersebut ada di papan permainanmu, <span class="badge badge-success p-1">klik angka tersebut</span> sebelum angkanya menghilang. Ulangi sampai <span class="badge badge-success p-1">angka di papan permainanmu kosong</span>dan pemenang akan ditampilkan pada layar anda! <span class="badge badge-success p-1">Skor anda akan bertambah ketika anda lebih dulu mengklik nomor yang tepat!</span></p>
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
      localStorage.setItem('home', 'home')
    },

  }
}
</script>

<style>

</style>
