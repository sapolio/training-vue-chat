<template>
  <div class="v-user-chat">
    <v-message v-for="message in messages" :key="message.id" :message="message" />
    <div class="input__field">
      <input
        type="text"
        class="v-user-chat__textfield"
        v-model="textValue"
        @keypress.enter="sendMessage"
      />
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import vMessage from './v-message'
import { mapActions } from "vuex";

export default {
name: 'v-user-chat',
components: {
  vMessage
},
props: {
  messages: {
    type: Array,
    default: () => []
  },
  user: {
    type: Object,
    default: () => {}
  }
},
data() {
  return {
    textValue: ''
  }
},
methods: {
  ...mapActions([
    'SET_MESSAGE_TO_CHAT',
    'FETCH_CHATS',
  ]),
  sendMessage() {
    let user = {...this.user}
    let message = {
      id: this.messages.length + 1,
      time: new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
      }),
      text: this.textValue,
      type: 'own'
    }
    user.chat.push(message)
    console.log(user)
    this.SET_MESSAGE_TO_CHAT(user)
      .then(() => {
        this.FETCH_CHATS()
        this.textValue = ''
      })
  }
}
}
</script>

<style>
</style>