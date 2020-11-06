<template>
  <!-- <div class="w-full p-4" v-if="$store.getters.getterActiveConnection"> -->
    <!-- <div class="w-full" v-if="$store.getters.getterActiveConnectionType == 'incoming'"> -->
  <div class="w-full h-full absolute inset-0 z-50 my-auto bg-smoke flex items-center justify-center loader p-8" v-if="$store.getters.getterActiveConnection">

    <!-- INCOMING -->
    <div class="w-full h-3/4 max-w-md flex flex-col items-center justify-around" v-if="$store.getters.getterActiveConnectionType == 'incoming'">
      <img class="fill-current text-white" src="/incoming.svg" width="198px"/>
      <div class="w-full max-w-sm my-6">
        <h1 class="w-full text-center text-white">{{$store.getters.getterActiveConnectionFromUserName}}</h1>
      </div>
      <div class="w-full max-w-sm flex justify-around">
        <button class="bg-red p-6 text-white rounded-full" @click="rejectIncomingCall()">
          <img class="fill-current text-white" src="/call.svg" width="44px"/>
        </button>
        <button class="bg-green p-6 text-white rounded-full" @click="acceptCall()" v-if="$store.getters.getterActiveConnectionStatus != 'open'">
          <img class="fill-current text-white" src="/call.svg" width="44px"/>
        </button>
      </div>
    </div>

    <!-- OUTGOING -->
    <div class="w-full h-3/4 max-w-md flex flex-col items-center justify-around" v-else>
      <img class="fill-current text-white" src="/outgoing.svg" width="198px"/>
      <div class="w-full max-w-sm my-6">
        <h1 class="w-full text-center text-white">{{$store.getters.getterActiveConnectionToUserName}}</h1>
      </div>
      <div class="w-full max-w-sm flex justify-around">
        <button class="bg-red p-6 text-white rounded-full" @click="rejectIncomingCall()">
          <img class="fill-current text-white" src="/call.svg" width="44px"/>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Caller',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions(['disconnectConnection', 'rejectIncomingCall', 'acceptCall'])
  }
}
</script>

<style>

</style>
