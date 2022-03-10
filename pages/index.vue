<template lang="pug">
  div
    v-row(v-if="preview" justify="center" align="center").fill-height
      div.pt-10.mx-10
        h1 Welcome! 
        p Thank you for taking the time to participate in our research. Before we start, please take the time to read the guidelines and to follow them as best as you can. This will ensure us the best output as we aim to meet the ideal conditions for the research. 
        br
        h3 Guidelines:
        ol 
          li Please record in a well-lit room.
          li Make sure that the webcam is in front of the child, and the whole face is visible. 
          li Allow the browser access to the microphone. This will be used to sync the video and the facial response.
          li Allow the browser access to the webcam.
          li Click the red button (start recording) before playing the youtube video
          li The data gathered will be used for our study 
            b AND ONLY FOR THE STUDY. 
          li At anytime, the child may opt to stop watching at anytime. The child has the right to withdraw from the study. 
          li For more details, you may see our 
            NuxtLink(to="/about") About Page.
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