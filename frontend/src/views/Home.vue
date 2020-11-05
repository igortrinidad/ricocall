<template>
  <div class="w-full h-full flex items-center justify-center">
    <h1>Home</h1>
    <Caller></Caller>
  </div>
</template>

<script>
import Caller from '@/components/Caller'
export default {
  name: 'Home',
  components: { Caller }
}
</script>
