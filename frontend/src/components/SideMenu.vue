<template>
  <div
    :class="[(sideMenuIsOpen) ? 'h-full menu-open w-full' : '']"
    class="text-blue side-menu-container items-start md:h-full max-w-full md:max-w-1/3 absolute md:static bg-grey-light p-6  shadow-sm z-10 flex flex-wrap">
    <button
      v-if="sideMenuIsOpen"
      @click="close()"
      aria-label="Close side menu"
      class="cursor-pointer focus:outline-none flex text-black"
    >
      <feather type="x" size="28"></feather>
    </button>
    <button
      v-else
      @click="sideMenuIsOpen = true"
      aria-label="open side menu"
      class="cursor-pointer focus:outline-none flex text-black"
    >
      <feather type="menu"></feather>
    </button>
    <div class="side-menu-content h-full w-full flex" >
      <div v-if="sideMenuIsOpen" class="w-full flex flex-col h-full">
        <router-link to="/" class="inline-block w-full flex items-center justify-center">
          <img src="/logo.svg" width="128px" alt="Ricocall Logo" />
        </router-link>

        <div class="flex max-h-full overflow-y-auto mb-4" v-if="$store.getters.getterLoggedUser">
          <UserList></UserList>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList'
export default {
  name: 'SideMenu',
  components: { UserList },
  data() {
    return {
      sideMenuIsOpen: false
    }
  },
  mounted() {
    if(window.innerWidth > 798) {
      this.sideMenuIsOpen = true
    }
  },
  methods: {
    close() {
      if(this.sideMenuIsOpen) {
        this.sideMenuIsOpen = false
      }
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
