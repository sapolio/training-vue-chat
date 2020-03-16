<template>
  <div class="v-user" @click="toUserChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <p class="info__name">{{user_data.name}}</p>
      <p class="info__last-message">{{user_data.chat.slice(-1)[0].text}}</p>
    </div>
    <div class="v-user__time">{{user_data.chat.slice(-1)[0].time}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: 'v-user',
props: {
  user_data: {
    type: Object,
    default: () => {}
  }
},
methods: {
  ...mapActions([
    'SET_USER_TO_HEADER'
  ]),
  toUserChat() {
    this.$router.push({
      name: 'chat',
      params: { 'messages': this.user_data.chat, 'user': this.user_data }
    })
    this.SET_USER_TO_HEADER(this.user_data.name)
  }
}
}
</script>

<style>
</style>