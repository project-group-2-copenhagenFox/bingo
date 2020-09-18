import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // players: ['Player 1', 'Player 2', 'Player 3'],
    boards: [],
    nickName: '',
    localNickname: localStorage.nickname,
    ranNum: 9,
    score: 0
  },
  mutations: {
    setBoards (state, payload) {
      state.boards = payload,
      state.nickName = payload.nickName
    },
    changeStatus (state, num) {
      state.boards.forEach(cellObj => {
        console.log(cellObj, '<<<< cell')
        cellObj.cell.forEach(item => {
          console.log(item, '<<<< item')
          if (item.value == num) {
            item.status = true
          }
        })
      })
    },
    setRanNum(state, num) {
      state.ranNum = num
    },
    nambah(state) {
      state.score ++
    }
  },
  actions: {
  },
  modules: {
  }
})
