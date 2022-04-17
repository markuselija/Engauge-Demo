<template lang="pug">
  div
    div(v-if="testingCamera")
      Camera
    div(v-else)
      v-row(v-if="preview" justify="center" align="center").fill-height.pa-10
        div.pt-10.mx-15
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
            li The child may opt to stop watching at anytime. The child also has the right to withdraw from the study. 
            li For more details, you may see our 
              NuxtLink(to="/about") About Page.
          br
          br
          v-btn(@click="preview = false" color="white").black--text I understand
      v-row(v-else).fill-height.pa-5
        v-col
          div.wrapper
            //- iframe(
            //-   width="560"
            //-   height="349"
            //-   src="https://www.youtube-nocookie.com/embed/eb0Dpsziy_k?controls=0"
            //-   title="YouTube video player"
            //-   frameborder="0"
            //-   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            //-   allowfullscreen
            //-   id="player"
            //- )
            youtube(
              width="560"
              height="349"
              video-id="eb0Dpsziy_k"
              ref="youtube"
              @playing="started ? resume() : start()"
              @paused="started ? pause() : ''"
              @ended="stop()"
              @ready="ready()"
            )
            v-btn(v-if="started" @click="stop()") End Recording
        v-col(cols="4")
          Camera(ref="camera")
          //- MulticorderUI(:videoTypes="['camera']")
</template>

<script>
// import  MulticorderUI  from 'multicorder/vuetify_ui/src/components/MulticorderUI.vue';
import Camera from "~/components/Camera.vue";
// import { VueRecordVideo } from '@codekraft-studio/vue-record';

//inside your vue options api
export default {
  head() {
    return {
      title: "Engauge Demo",
    };
  },
  data() {
    return {
      preview: true,
      testingCamera: false,
      started: false,
    };
  },
  components: {
    // MulticorderUI,
    Camera,
    // VueRecordVideo,
  },
  created() {
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player", {
        events: { onStateChange: onPlayerStateChange },
      });
    }
  },
  methods: {
    ready() {
      this.$refs.camera.startCam();
    },
    start() {
      this.started = true;
      this.$refs.camera.startRec();
    },
    pause() {
      this.$refs.camera.pauseRec();
    },
    resume() {
      this.$refs.camera.resumeRec();
    },
    stop() {
      this.started = false;
      this.$refs.camera.stopRec();
      this.$refs.youtube.player.stopVideo();
    },
    // ready() {
    //   console.log("readied");
    // },
    // start() {
    //   this.started = true;
    //   console.log("started");
    // },
    // pause() {
    //   console.log("paused");
    // },
    // resume() {
    //   console.log("resumed");
    // },
    // stop() {
    //   this.started = false;
    //   console.log("stopped");
    // },
  },
};
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
