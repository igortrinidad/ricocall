<template>
  <div class="w-full p-4">
    <div class="w-full flex justify-between my-3">
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
    }
  },
  mounted() {
  },
  methods: {
    disconnect() {
      Device.disconnectAll()
    }
  }
}
</script>

<style>

</style>
