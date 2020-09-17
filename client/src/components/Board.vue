<template>
<div>
    <div class="bingo-board">
        <div v-for="(n, i) in 5" :key="i">
        <div v-for="(n, j) in 5" :key="j">
            <Cell @click="testClick(i, j)" :value="board[i][j]"></Cell>
        </div>
        </div>
        <h2 class="bg-danger align-self-center">{{ player }}</h2>
    </div>
</div>

</template>

<script>
import Cell from '@/components/Cell.vue'

export default {
  name: 'Board',
  data () {
    return {
      board: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', 99, '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ]
    }
  },
  props: ['player'],
  components: {
    Cell
  },
  methods: {
    testClick (x, y) {
      console.log('cell di click')
    }
  }
}
</script>

<style>
.bingo-board {
  display: flex;
  flex-wrap: wrap;
  width: 304px;
  height: 304px;
}
</style>
