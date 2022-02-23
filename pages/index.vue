<template lang="pug">
  div
    v-row(v-if="preview" justify="center" align="center").fill-height
      div.pt-10.mx-10
        h1 Welcome and thank you for participating!
        br
        br
        h2 A few reminders for the parents:
        br
        h3 Please record in a well lit room
        h3 Allow the browser access to the webcam
        h3 Allow the browser access to the microphone. This will be used to sync the video and the facial response.
        h3 Click the red button (start recording) before playing the youtube video
        h3 The data gathered will be used for our study AND ONLY FOR THE STUDY. We will not be collecting any personal information
        h3 For more details, you may see our &nbsp;
          NuxtLink(to="/about") about page
        br
        br
        v-btn(@click="preview = false" color="white").black--text I understand
    v-row(v-else).fill-height.pa-5
      v-col
        div.wrapper
          iframe(
            width="560"
            height="349"
            src="https://www.youtube-nocookie.com/embed/eb0Dpsziy_k?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          )
      v-col(cols="4")
        MulticorderUI
</template>

<script>
import  MulticorderUI  from 'multicorder/vuetify_ui/src/components/MulticorderUI.vue';

//inside your vue options api
export default {
  data() {
    return {
      preview: true,
    }
  },
  components: {
    MulticorderUI,
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>