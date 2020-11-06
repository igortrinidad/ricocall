<template>
  <div class="w-full flex flex-wrap p-4 border border-grey-light shadow-sm">
    <InputWithIcon
      :id="'email'"
      :icon="'mail'"
      v-model="user.email"
      :label="'Insert your email'"
      :required="true"
      :type="'email'"
      :validation="user.validation('email')"
    ></InputWithIcon>
    <InputWithIcon
      class="mt-4"
      :icon="'key'"
      v-model="user.password"
      :label="'Insert your password'"
      :type="'password'"
      :required="true"
      :validation="user.validation('password')"
      @keydown.enter.native="login()"
    ></InputWithIcon>

    <p class="w-full text-right">
      <button class="button-sm text-blue font-bold px-0" @click="$emit('input', 'recover')">
        Forgot your password?
      </button>
    </p>

    <button
      @click="login()"
      class="button bg-yellow mt-4"
      :disabled="!user.email || !user.password">
      Sign In
    </button>
  </div>
</template>

<script>
import User from '@/models/User'
import { mapActions } from 'vuex'
export default {
  name: 'SignIn',
  data() {
    return {
      user: new User()
    }
  },
  methods: {
    ...mapActions(['attemptUserLogin']),

    login() {
      const { email, password } = this.user
      this.attemptUserLogin({ email, password})
    }
  }
}
</script>
