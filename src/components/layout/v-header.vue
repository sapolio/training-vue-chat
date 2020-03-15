<template>
  <div class="v-header">
    <div
      v-show="!isRoot"
      class="v-header__back"
      @click="goBack">
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div
      v-show="!isRoot"
      class="v-header__user-info">
      <span>{{currentUserChat}}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'v-header',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  computed:{
    ...mapState([
      'currentUserChat'
    ]),
    isRoot() {
      return this.$route.path === '/'
    }
  }

}
</script>

<style>

</style>