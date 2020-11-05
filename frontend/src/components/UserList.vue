<template>
  <div class="w-full flex flex-wrap">
    <div class="w-full" v-for="user in users" :key="user.id">
      <button @click="call(user)" class="button bg-white text-blue">{{user.name}}</button>
    </div>
  </div>
</template>

<script>
import { Device } from 'twilio-client'
export default {
  name: 'UserList',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      this.$api.get('/users/get')
      .then(({ data }) => {
        this.users = data.users
      })
    },
    call(user) {
      Device.connect( { From: this.$store.getters.getterLoggedUser.id, To: user.id });
    },
  }
}
</script>

<style>

</style>
