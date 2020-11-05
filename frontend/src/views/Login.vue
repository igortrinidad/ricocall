<template>
  <div class="w-full h-3/4 flex flex-wrap items-center justify-center">

    <div class="w-full max-w-sm flex flex-wrap justify-center p-4">
      <img src="/logo.svg" width="144px" alt="Ricocall Logo" />

      <div class="w-full my-8" v-if="type == 'signin'">
        <SignIn v-model="type"></SignIn>
        <div class="w-full p-4 border border-grey-light shadow-sm mt-6">
          <p>New to Ricocall? <button class="text-blue font-bold" @click="changeView('signup')">Create an account !</button></p>
        </div>
      </div>
      <div class="w-full my-8" v-if="type == 'signup'">
        <SignUp v-model="type"></SignUp>
        <div class="w-full p-4 border border-grey-light shadow-sm mt-6">
          <p>Already have a Ricocall account? <button class="text-blue font-bold px-0" @click="changeView('signin')">To go login !</button></p>
        </div>
      </div>
      <div class="w-full my-8" v-if="type == 'recover'">
        <Recover v-model="type"></Recover>
        <div class="w-full p-4 border border-grey-light shadow-sm mt-6">
          <p>Already have a Ricocall account? <button class="text-blue font-bold px-0" @click="changeView('signin')">To go login !</button></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Recover from '@/components/Recover'
export default {
  name: 'Login',
  components: { SignIn, SignUp, Recover },
  data() {
    return {
      type: 'signin'
    }
  },
  methods: {
    changeView(type) {
      this.type = type
      setTimeout(() => {
        if(type == 'signin') {
          document.getElementById('email').focus()
        } else {
          document.getElementById('username').focus()
        }
      }, 200)
    }
  }
}
</script>

<style>

</style>
