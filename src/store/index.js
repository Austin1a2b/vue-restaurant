import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: '',
  },
  // 在vue 中  要使用 mutation 中的函式 - 
  //this.$store.commit( ' mutation裡的函式名稱 ' ,  資料內容  )
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
      state.token = ''
    }
  },
  // 在 js 中 , 要呼叫 action , 
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await usersAPI.getCurrentUser()
        // const { id, name, image, isadmin } = data
        commit('setCurrentUser', data)
        return true
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
        return false
      }
    },
  },
  modules: {
  },
  getters: {
  },

})
