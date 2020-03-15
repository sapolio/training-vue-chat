<template>
  <div class="v-contact-user" @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
      <span>{{contact_data.name}}</span>
    </div>
    <div
      class="user__status"
      :class="contact_data.status"
    ></div>
  </div>
</template>

<script>

export default {
  name: 'v-contact-user',
  components: {
  },
  props: {
    contact_data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toContactInfo() {
      this.$emit('to-contact-info', this.contact_data)
    }
  }

}
</script>

<style>
</style>