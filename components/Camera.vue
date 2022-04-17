<template lang="pug">
    div
        div.camera-box
            div(v-if="!doneRecording" style="height: 200px").text-center
                v-icon(style="height: 25px" v-if="!isCameraOpen").mt-8.button-img.camera-shoot mdi-camera
                div(v-else).camera-canvas
                    video(ref="camera" disablePictureInPicture :width="canvasWidth" :height="canvasHeight" autoplay muted)
                    canvas(v-show="false" id="photoTaken" ref="canvas" :width="canvasWidth" :height="canvasHeight")
            div(v-else style="height: 200px").text-center
                div
                    video(controls disablePictureInPicture :width="canvasWidth" :height="canvasHeight")
                        source(:src="player_link" type="video/webm")
            //- div(style="display: flex; justify-content: center")
                div.camera-button
                    v-btn(v-if="!isCameraOpen" @click="startCam()")
                        v-icon(style="height: 25px").button-img mdi-camera
                        span.white--text &nbsp;Open Camera
                    v-btn(v-if="isCameraOpen" @click="toggleRecording()")
                        span(v-if="!isCameraRecording").white--text
                            v-icon( style="height: 25px").button-img mdi-camera-plus
                            |  &nbsp;Start
                        span(v-else).white--text
                            v-icon(style="height: 25px").button-img mdi-camera-off
                            |  &nbsp;Stop
        //- a(href="blob:http://localhost:3000/ae4c553a-3896-4cd2-ae73-b0bf4f9dcdd7" download="test.webm") Download Video
        h3 Status: {{ status }}
        v-btn(v-if="doneRecording" @click="onUpload()") Upload
</template>

<script>
// import firebase from "firebase/app";

export default {
  name: "Camera",
  data() {
    return {
      isCameraOpen: false,
      isCameraRecording: false,
      canvasWidth: "100%",
      canvasHeight: "284",
      media_recorder: null,
      blobs_recorded: [],
      camera_stream: null,
      download_link: null,
      doneRecording: false,
      player_link: null,
      img1: "",
      status: "ready",
    };
  },
  methods: {
    toggleRecording() {
      if (this.isCameraRecording) {
        this.isCameraRecording = false;
        this.stopRec();
      } else {
        this.isCameraRecording = true;
        this.startRec();
      }
    },
    startCam() {
      this.isCameraOpen = true;
      const constr = (window.constraints = {
        audio: true,
        video: true,
      });
      navigator.mediaDevices
        .getUserMedia(constr)
        .then((stream) => {
          this.camera_stream = stream;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          alert("Browser does not support or there was an error" + error);
        });
    },
    startRec() {
      this.status = "recording";
      this.startCam();
      let blobs_recorded = [];
      // let local_link = null;
      this.media_recorder = new MediaRecorder(this.camera_stream, {
        mimeType: "video/webm",
      });
      this.doneRecording = false;

      // event : new recorded video blob available
      this.media_recorder.addEventListener("dataavailable", function (e) {
        blobs_recorded.push(e.data);
        console.log(e.data);
      });

      // event : recording stopped & all blobs sent
      this.media_recorder.addEventListener("stop", () => {
        console.log("medrecstop");
        // this.download_link = new File([blobs_recorded], 'name', {type: 'video/webm', lastModified: Date.now()});
        this.player_link = window.webkitURL.createObjectURL(
          new Blob(blobs_recorded, { type: "video/webm" })
        );
        console.log(this.player_link);
      });
      // start recording with each recorded blob having 1 second video
      this.media_recorder.start(1000);
    },
    pauseRec() {
      this.status = "paused recording";
      this.media_recorder.pause();
    },
    resumeRec() {
      this.status = "resumed recording";
      this.media_recorder.resume();
    },
    stopRec() {
      this.status = "stopped";
      this.media_recorder.stop();
      this.doneRecording = true;
    },
    onUpload() {
      console.log("fired");
      console.log(this.download_link);
      console.log(this.doneRecording);
      // this.img1=null;
      // const storageRef=firebase.storage().ref(`${this.download_link}`).put(this.download_link);
      // storageRef.on(`state_changed`,snapshot=>{
      // this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      //     }, error=>{console.log(error.message)},
      // ()=>{this.uploadValue=100;
      //     storageRef.snapshot.ref.getDownloadURL().then((url)=>{
      //         this.img1 =url;
      //         console.log(this.img1)
      //         });
      //     }
      // );
    },
  },
};
</script>

<style scoped>
.camera-box {
  border: 1px dashed;
  border-radius: 4px;
  padding: 8px;
  min-height: 300px;
}
</style>
