<template>
<div>
    <div class="bingo-board">
              <!-- {{board.cell}} -->
        <!-- <div v-for="(n, i) in 5" :key="i">
          <div v-for="(i, j) in 5" :key="j">
              <Cell @click="testClick(i, j)" :value="board.cell[j].value"></Cell>
          </div>
        </div> -->
        <div v-for="(n, i) in board.cell" :key="i"  class="flex-wrap">
          <Cell @click="testClick(i)" :value="board.cell[i].value"></Cell>
        </div>
        <h2 class="bg-danger align-self-center">{{ board.nickName }}</h2>
    </div>
</div>

</template>

<script>
import Cell from '@/components/Cell.vue'

export default {
  name: 'Board',
  data () {
    return {
      board1: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', 99, '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ]
    }
  },
  props: ['board'],
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
  width: 250px;
  height: 250px;
}
</style>
