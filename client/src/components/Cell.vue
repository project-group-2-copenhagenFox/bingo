<template>
    <div class="cell" @click="testClick(value)">
        <span v-if="value !== ''">{{ value }}</span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nickName: this.$store.state.nickName
    }
  },
  props: {
    value: Number
  },
  methods: {
    myBoard () {
      if (localStorage.nickname === this.nickName) {
        return true
      }
    },
    testClick (value) {
      console.log('cell di click', value)
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
