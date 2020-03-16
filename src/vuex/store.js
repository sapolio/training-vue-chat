import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const contactsUrl = 'http://localhost:3000/contacts/',
  chatstUrl = 'http://localhost:3000/chats/'

let store = new Vuex.Store({
  state: {
    contacts: [],
    chats: [],
    currentUserChat: ''
  },
  getters: {},
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts
    },
    SET_USER_TO_HEAD(state, user) {
      state.currentUserChat = user ? user : ''
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats
    }
  },
  actions: {
    FETCH_CONTACTS({ commit }) {
      return axios
        .get(contactsUrl)
        .then(response => response.data)
        .then(contacts => {
          commit('SET_CONTACTS_TO_STORE', contacts)
        })
    },
    SET_USER_TO_HEADER({ commit }, user = '') {
      commit('SET_USER_TO_HEAD', user)
    },
    FETCH_CHATS({ commit }) {
      return axios
        .get(chatstUrl)
        .then(response => response.data)
        .then(chats => commit('SET_CHATS_TO_STORE', chats))
    },
    SET_MESSAGE_TO_CHAT({ commit }, user) {
      return axios.put(chatstUrl + user.id, user).then(response => response)
    }
  }
})

export default store
