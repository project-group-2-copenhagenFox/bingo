<template>
<div>
    <div class="bingo-board">
        <div v-for="(n, i) in board.cell" :key="i"  class="flex-wrap">
          <Cell @click="testClick(i)" :valueid="board.cell[i]" :nickname="board.nickName"></Cell>
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
