<template>
  <div class="w-full flex flex-wrap justify-start items-start content-start">
    <h3 class="w-full"><span class="border-b-4 border-yellow">Last calls</span></h3>
    <div class="w-full max-w-full overflow-x-auto">

      <table class="w-full mt-4 ">
        <thead>
          <tr>
            <td class="p-2">Type</td>
            <td class="p-2">sId</td>
            <td class="p-2">Duration</td>
            <td class="p-2">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="call in lastCalls" :key="call.sid">
            <td class="p-2">
              <img class="fill-current text-white" src="/incoming.svg" width="24px" v-if="call.direction == 'inbound'"/>
              <img class="fill-current text-white" src="/outgoing.svg" width="24px" v-else/>
            </td>
            <td class="p-2">{{call.sid}}</td>
            <td class="p-2">{{call.duration}}s</td>
            <td class="p-2">{{call.status}}</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script>
export default {
  name: 'LastCalls',
  data() {
    return {
      lastCalls: []
    }
  },
  mounted() {
    this.getLastCalls()
  },
  methods: {
    getLastCalls() {
      this.$api.get('/twilio/getLastCalls')
      .then(({ data }) => {
        this.lastCalls = data.calls
      })
    }
  }
}
</script>
