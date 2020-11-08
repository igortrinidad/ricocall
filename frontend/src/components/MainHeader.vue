<template>
  <div class="w-full flex justify-end p-4 w-full h-16 invisible md:visible" v-if="$store.getters.getterLoggedUser">
    <router-link
      :to="{ name: 'Home' }"
      :class="[($route.name == 'Home') ? 'border-b-4 border-yellow text-black' : '']"
      class="button-sm flex items-center text-grey hover:text-black" @click="logout()" aria-label="logout">
      Home
    </router-link>
    <router-link
      :to="{ name: 'About' }"
      :class="[($route.name == 'About') ? 'border-b-4 border-yellow text-black' : '']"
      class="button-sm flex items-center text-grey hover:text-black" aria-label="logout">
      About
    </router-link>
    <router-link
      :to="{ name: 'Settings' }"
      :class="[($route.name == 'Settings') ? 'border-b-4 border-yellow text-black' : '']"
      class="button-sm flex items-center text-grey hover:text-black" aria-label="logout">
      Settings
    </router-link>
    <button class="button-sm flex items-center text-grey hover:text-black" @click="logoutUser()" aria-label="logout">
      {{$store.getters.getterLoggedUser.name}} logout
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions(['logoutUser']),
  }
}
</script>
