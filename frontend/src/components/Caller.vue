<template>
  <div class="w-full p-4">
    <div class="w-full flex justify-between my-3">
      <button class="bg-blue p-3 text-white" @click="setupDevice()">Setup</button>
      <button class="bg-red p-3 text-white" @click="disconnect()">Desligar</button>
    </div>
  </div>
</template>

<script>
import { Device } from 'twilio-client'
import { getLogger } from 'loglevel';

const logger = getLogger(Device.packageName);
// Set log level on subsequent page loads and refreshes
logger.setLevel('DEBUG');
export default {
  name: 'Caller',
  data() {
    return {
      name: 'joey',
      nameTo: 'mike',
    }
  },
  mounted() {
    this.setupDevice()
  },
  methods: {
    setupDevice() {
      this.$api.get(`/twilio/token`)
      .then(({ data }) => {

        const { token } = data
        console.log(token)
        Device.setup(token)

        Device.ready(function(device) {
          console.log('Ready');
          console.log(device);
        })

        Device.error(function(error) {
          console.log('Error: ' + error.message);
        })

        Device.incoming(function(conn) {
          console.log('Incoming connection from ' + conn.parameters.From);
          // accept the incoming connection and start two-way audio
          conn.accept();
        })
      })
    },
    disconnect() {
      Device.disconnectAll()
    }
  }
}
</script>

<style>

</style>
