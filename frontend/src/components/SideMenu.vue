<template>
  <div
    :class="[($store.getters.getterSideMenuIsOpen) ? 'h-full menu-open w-full' : '']"
    class="text-blue side-menu-container items-start md:h-full max-w-full md:max-w-1/3 absolute md:static bg-grey-light p-6  shadow-sm z-10 flex flex-wrap">
    <button
      v-if="$store.getters.getterSideMenuIsOpen"
      @click="close()"
      aria-label="Close side menu"
      class="cursor-pointer focus:outline-none flex text-black"
    >
      <feather type="x" size="28"></feather>
    </button>
    <button
      v-else
      @click="open()"
      aria-label="open side menu"
      class="cursor-pointer focus:outline-none flex text-black"
    >
      <feather type="menu"></feather>
    </button>
    <div class="side-menu-content h-full w-full flex" >
      <div v-if="$store.getters.getterSideMenuIsOpen" class="w-full flex flex-col h-full">
        <router-link :to="$store.getters.getterLoggedUser ? '/home' : '/'" class="inline-block w-full flex items-center justify-center">
          <img src="/logo.svg" width="128px" alt="Ricocall Logo" />
        </router-link>

        <div class="w-full flex-col p-4 w-full flex" v-if="!$store.getters.getterLoggedUser">
          <router-link
            :to="{ name: 'About' }"
            :class="[($route.name == 'About') ? 'text-black' : '']"
            class="button-sm text-center text-grey hover:text-black my-1" aria-label="about">
            About
          </router-link>
          <router-link
            :to="{ name: 'Login' }"
            :class="[($route.name == 'Login') ? 'text-black' : '']"
            class="button-sm text-center text-grey hover:text-black my-1" aria-label="Login">
            Login
          </router-link>
        </div>

        <div class="w-full flex-col p-4 w-full flex md:hidden" v-if="$store.getters.getterLoggedUser">
          <router-link
            :to="{ name: 'Home' }"
            :class="[($route.name == 'Home') ? 'text-black' : '']"
            class="button-sm text-center text-grey hover:text-black my-1" aria-label="logout">
            Home
          </router-link>

          <router-link
            :to="{ name: 'Settings' }"
            :class="[($route.name == 'Settings') ? 'text-black' : '']"
            class="button-sm text-center text-grey hover:text-black my-1" aria-label="logout">
            Settings
          </router-link>
          <button class="button-sm text-center text-grey hover:text-black my-1" @click="logoutUser()" aria-label="logout">
            {{$store.getters.getterLoggedUser.name}} logout
          </button>
        </div>

        <div class="w-full flex max-h-full overflow-y-auto my-4" v-if="$store.getters.getterLoggedUser">
          <UserList></UserList>
          <Caller></Caller>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList'
import { mapActions } from 'vuex'
export default {
  name: 'SideMenu',
  components: { UserList },
  mounted() {
    if(window.innerWidth > 798) {
      this.open()
    }
  },
  methods: {
    ...mapActions(['logoutUser']),

    close() {
      this.$store.commit('setSideMenuIsOpen', false)
    },
    open() {
      this.$store.commit('setSideMenuIsOpen', true)
    }
  }
}
</script>

<style>

  .side-menu-container {
    width: auto;
  }

  .side-menu-content {
    height: 100%;
    width: 0%;
  }

  .side-menu-container.menu-open > .side-menu-content {
    width: 100%;
  }

</style>
