<template>
  <div class="w-full p-4">
    <input 
      v-model="name"
      class="block rounded-full bg-white appearance-none outline-none w-full h-full bg-grey-light text-grey-darker text-lg py-3 pr-8 pl-4 shadow-sm"/>
    
    <input 
      v-model="nameTo"
      class="block rounded-full bg-white appearance-none outline-none w-full h-full bg-grey-light text-grey-darker text-lg py-3 pr-8 pl-4 shadow-sm"/>
    
    <div class="w-full flex justify-between my-3">
      <button class="bg-red p-3 text-white" @click="setupDevice()">Setup device</button>
      <button class="bg-blue p-3 text-white" @click="call()">Ligar</button>
      <button class="bg-red p-3 text-white" @click="disconecct()">Ligar</button>
    </div>
  </div>
</template>

<script>
import { Device } from 'twilio-client'
export default {
  name: 'Caller',
  data() {
    return {
      name: 'joey',
      nameTo: 'mike',
    }
  },
  mounted() {
  },
  methods: {
    setupDevice() {
      this.$api.get(`/twilio/token?name=${this.name}`)
      .then(({ data }) => {

        const { token } = data
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
    call() {
      Device.connect( { From: `${this.name}`, To: `${this.nameTo}` });
    },
    disconnect() {
      Device.disconnect()
    }
  }
}
</script>

<style>

</style>