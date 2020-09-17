import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // players: ['Player 1', 'Player 2', 'Player 3'],
    boards: [],
    nickName: '',
    localNickname: localStorage.nickname
  },
  mutations: {
    setBoards (state, payload) {
      state.boards = payload,
      state.nickName = payload.nickName
    }
  },
  actions: {
  },
  modules: {
  }
})
