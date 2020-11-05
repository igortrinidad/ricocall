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

    <button
      @click="checkEmail()"
      class="button bg-yellow mt-4"
      :disabled="!user.email">
      Recover password
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

    checkEmail() {
      const { email } = this.user
      this.$api.post(`/user/auth/checkEmail`, { email })
      .then(() => {
        this.$api.post(`/user/auth/generateNewPassword`, { email }, { loader: true })
        .then(() => {
          this.$notifications.info(`We've sent you a new password`)
          this.$emit('input', 'signin')
        })
      })
      .catch(() => {
        this.$notifications.error(`We didn't found your email ${ email }`)
      })
    }
  }
}
</script>
