import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const contactsUrl = 'http://localhost:3000/contacts',
  chatstUrl = 'http://localhost:3000/chats'

let store = new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {},
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts
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
    }
  }
})

export default store
