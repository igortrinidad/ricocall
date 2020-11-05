<template>
  <div class="w-full h-3/4 flex  justify-center p-6">
    <div class="w-full max-w-sm justify-center p-4 w-full border border-grey-light shadow-sm mt-6">
      <h2>Application Settings</h2>
      <InputWithIcon
        class="mt-4"
        :icon="'key'"
        v-model="url"
        :label="'Twilio TwiML app router endpoint'"
        :type="'text'"
      ></InputWithIcon>

      <button
        @click="updateTwilioVoiceUrl()"
        class="button bg-yellow mt-4"
      >
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationSettings',
  data() {
    return {
      url: 'https://ricocall.igortrindade.dev/api/twilio/routeIncomingCall'
    }
  },
  methods: {
    updateTwilioVoiceUrl() {
      this.$api.post(`/twilio/updateApplicationVoiceUrl`, { url: this.url }, { loader: true})
      .then(() => {
        this.$notifications.success('Twilio Voice Url successfully updated!')
      })
      .catch(() => {
        this.$notifications.error('Error while trying to update Twilio Voice Url')
      })
    }
  }
}
</script>
