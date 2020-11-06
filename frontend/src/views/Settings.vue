<template>
  <div class="w-full flex flex-wrap p-6">
    <h3><span class="border-b-4 border-yellow">Settings</span></h3>

    <div class="w-full">
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
