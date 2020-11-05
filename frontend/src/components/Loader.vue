<template>
  <div :class="[(getterLoaderShow) ? 'flex' : 'hidden']" class="w-full h-full absolute inset-0 z-50 my-auto bg-smoke flex items-center justify-center loader" id="loader">
    <div class="spinnerx"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Loader',
  computed: {
    ...mapGetters(['getterLoaderShow'])
  }
}
</script>

<style>
  .loader{
  z-index: 100;
  height: 140vh !important;
}

.spinnerx {
    width: 128px;
    height: 128px;
    background-color: #F3F5FB;
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
  }

  @-webkit-keyframes sk-scaleout {
    0% { -webkit-transform: scale(0) }
    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
  }
</style>
