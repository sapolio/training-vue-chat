import Vue from "vue";
import Router from "vue-router"

Vue.use(Router)

import vContactList from '../components/contacts/v-contact-list'
import vContactsUserInfo from '../components/contacts/v-contact-user-info'
import vUserList from '../components/users/v-users-list'
import vUserChat from '../components/users/chat/v-user-chat'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContactList
    },
    {
      path: '/contact',
      name: 'contact',
      component: vContactsUserInfo
    },
    {
      path: '/chats',
      name: 'chats',
      component: vUserList
    },
    {
      path: '/chat',
      name: 'chat',
      component: vUserChat,
      props: true
    }
  ]
})

export default router