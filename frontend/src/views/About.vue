<template>
  <div class="w-full p-6">
    <h3><span class="border-b-4 border-yellow">About</span></h3>

    <div class="w-full flex justify-center">
      <div class="w-full max-w-md">
        <h4 class="mt-6 mb-4">Hello there!</h4>
        <p>Thanks for visiting my first ever aptitude test, created from scratch in 3 days for <a href="https://ricochet360.com" target="_blank">Ricochet360</a> developer position.</p>
        <p class="mt-3">This application was made using <a href="https://adonisjs.com" target="_blank">AdonisJS</a> on the backend side and <a href="https://vuejs.org" target="_blank">Vue.js</a> for frontend application.</p>
        <p class="mt-3">For the voice call service we had to use <a href="https://twilio.com" target="_blank">Twilio</a> services - this was one of the most important part of the project requirements, but i have to be honest with you, i was tempted to use native browser webRTC and libs like PeerJS to do this.</p>
        <p class="mt-3">After the very first contact with the Twilio API i endup understanding the core of the service and i'm proud with the end results! This is my first time creating a voice chat application and it was great to do something cool like this! The Twilio provider is very interesting, i'm shure that nothing was lost, neither my mustache strands that fell on the way.</p>
        <p class="mt-3">In the realtime side i decided to use <a href="https://socket.io" target="_blank">Socket.io</a>, cause i already had some background with this tool and you may guess, the time was against me. But i believe that Twilio may have something that could help figure out if the user that we could chat are online or not.</p>
        <p class="mt-3">I know, i know... What about the repository right? Yeah, i understand your frustration but i have to create some TDD before publishing the code base for your guys, my fault!</p>
        <p class="mt-3">Thanks you all to be with me and sorry about my not so good english too.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
