<template>
  <div class="w-full flex flex-wrap">
    <h4 class="w-full mb-4"><span class="border-b-4 border-yellow">Contacts</span></h4>
    <div class="w-full" v-for="user in sortedUserList" :key="user.id">
      <button
        @click="checkCall(user)"
        class="button bg-white shadow-sm flex justify-center w-full rounded-full text-blue mb-3 text-sm">
          <span class="w-3/4 max-w-3/4 ellipsis text-left">{{user.name}}</span>
          <span class="text-xs ml-2" :class="[getUserStatusClass(checkUserStatus(user))]">{{checkUserStatus(user)}}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { getArrayItem } from '@/util/Functions'
import { mapActions } from 'vuex'
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      onlineUsers: []
    }
  },
  mounted() {
    this.getUsers()
    this.joinSocketRoom()
    this.$socket.on('onlineUsers', ({onlineUsers}) => {
      this.onlineUsers = onlineUsers
    })
  },

  computed: {
    sortedUserList() {
      const statusOrderIndex = ['online', 'busy', 'offline']
      return this.users.slice().sort((a, b) => {
        return statusOrderIndex.indexOf(this.checkUserStatus(a)) - statusOrderIndex.indexOf(this.checkUserStatus(b))
      })
    }
  },

  methods: {
    ...mapActions(['makeTwilioCall']),

    getUsers() {
      this.$api.get('/users/get')
      .then(({ data }) => {
        this.users = data.users
      })
    },

    joinSocketRoom() {
      this.$socket.emit('joinRoom', {userId: this.$store.getters.getterLoggedUser.id})
    },

    checkUserStatus(user) {
      const finded = getArrayItem(this.onlineUsers, {userId: user.id})
      if(finded) {
        return finded.status
      }
      return 'offline'
    },

    getUserStatusClass(status) {
      if(status == 'busy') return 'text-blue'
      if(status == 'online') return 'text-green'
      return 'text-grey'
    },

    checkCall(user) {
      if(this.$store.getters.getterActiveConnection) return
      if(this.checkUserStatus(user) === 'busy') {
        this.$notifications.warning(`${user.name} is busy, call again later!`)
        return
      }
      if(this.checkUserStatus(user) === 'offline') {
        this.$notifications.warning(`${user.name} is offline, call again later!`)
        return
      }

      this.makeTwilioCall({ user })
    }

  }
}
</script>
