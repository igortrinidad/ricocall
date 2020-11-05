<template>
  <div class="w-full flex justify-end p-4 w-full h-16">
    <button v-if="$store.getters.getterLoggedUser" class="button-sm flex items-center text-grey hover:text-black" @click="logout()" aria-label="logout">
      <feather type="x" size="28"></feather>
      logout
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions(['logoutUser']),

    logout() {
      this.logoutUser()
    }
  }
}
</script>

<style>

</style>
