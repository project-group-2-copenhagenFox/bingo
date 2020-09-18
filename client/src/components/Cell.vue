<template>
    <div class="cell" @click="testClick(valueid)">
        <span 
          v-if="valueid.status !== true"
          >{{ valueid.value }}</span>
    </div>
</template>

<script>
export default {
  props: {
    valueid: {},
    nickname: ''
  },
  methods: {
    testClick (valueid) {
      //ganti status di client
      console.log(valueid, '<<<< valueid di testclick')
      if (localStorage.nickname == this.nickname && valueid.value === this.$store.state.ranNum) {
        this.$store.commit('changeStatus', valueid.value)
        //id kirim ke server
        this.$socket.emit('changeStatus', valueid.value)
        this.$store.commit('nambah')
        // console.log('cell di click', id)
      }
    }
  }
}
</script>

<style>
.cell {
    width: 50px;
    height: 50px;
    border: 2px solid rgb(75,75,75);
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
