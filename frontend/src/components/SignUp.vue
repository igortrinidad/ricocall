<template>
  <div class="w-full flex flex-wrap p-4 border border-grey-light shadow-sm">
    <InputWithIcon
      :icon="'user'"
      :id="'username'"
      v-model="user.name"
      :label="'Insert your username'"
      :required="true"
      :validation="user.validation('name')"
    ></InputWithIcon>
    <InputWithIcon
      class="mt-4"
      :icon="'mail'"
      v-model="user.email"
      :label="'Inser your email'"
      :required="true"
      :type="'email'"
      :validation="user.validation('email')"
    ></InputWithIcon>
    <InputWithIcon
      class="mt-4"
      :icon="'key'"
      v-model="user.password"
      :label="'Password'"
      :type="'password'"
      :required="true"
      :validation="user.validation('password')"
    ></InputWithIcon>

    <p class="w-full text-right">
      <button class="button-sm text-blue font-bold px-0" @click="$emit('input', 'recover')">
        Forgot your password?
      </button>
    </p>

    <button
      @click="checkEmail()"
      :disabled="user.hasError"
      class="button bg-yellow mt-4 hover:shadow-sm focus:outline-none focus:shadow">
      Sign Up
    </button>
  </div>
</template>

<script>
import User from '@/models/User'
export default {
  name: 'SignUp',
  data() {
    return {
      user: new User()
    }
  },
  methods: {
    checkEmail() {
      this.$api.post(`/user/auth/checkEmail`, this.user)
      .then(() => {
        this.$notifications.error(`You already have an account, please login.`)
      })
      .catch(() => {
        this.$store.dispatch('registerUser', { user: this.user })
        .then(({ data }) => {
          console.log(data)
        })
      })
    }
  }
}
</script>
