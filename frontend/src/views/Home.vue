<template>
  <div class="w-full h-full flex p-6 mt-20 md:mt-0">
    <LastCalls></LastCalls>
  </div>
</template>

<script>
import LastCalls from '@/components/LastCalls'
export default {
  name: 'Home',
  components: { LastCalls }
}
</script>
