<template>
  <div id="app" class="w-full block m-auto h-screen overflow-y-auto bg-blue p-3 md:p-10">
    <div class="w-full shadow-md flex h-full relative">

      <SideMenu></SideMenu>

      <div class=" w-full h-full overflow-y-auto  flex flex-wrap bg-white">
        <MainHeader></MainHeader>
        <router-view></router-view>
      </div>
    </div>

    <Loader></Loader>
  </div>
</template>
<script>
  import SideMenu from './components/SideMenu'
  import MainHeader from './components/MainHeader'
  export default {
    name: 'App',
    components: { SideMenu, MainHeader }
  }
</script>
<style>

  @import './css/index.css';

  body {
    font-family: Montserrat,Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    line-height: 1.5;
    background-color: #F9F9F9;
    overflow-y: auto;
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,700&display=swap');

</style>
