<template lang="pug">
    div
        h3 {{ status }}
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
        div.text-center.mt-6
          v-btn(v-if="doneRecording" @click="onUpload()" large).white--text
            v-icon mdi-upload
            | Upload
</template>

<script>
// import firebase from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
      status: "",
    };
  },
  props: {
    pname: {
      type: String,
      default: "Parent",
    },
    sname: {
      type: String,
      default: "Student",
    },
  },
  computed: {
    firename() {
      var d = Date.now();
      var dstrunf = new Date(d);
      var dstr = dstrunf.toUTCString();
      return dstr + " " + this.pname + " - " + this.sname;
    },
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
      this.status = "Ready";
    },
    startRec() {
      this.startCam();
      this.status = "Recording";
      // let local_link = null;
      this.media_recorder = new MediaRecorder(this.camera_stream, {
        mimeType: "video/webm",
      });
      this.doneRecording = false;

      // event : new recorded video blob available
      this.media_recorder.addEventListener("dataavailable", (e) => {
        this.blobs_recorded.push(e.data);
      });

      // event : recording stopped & all blobs sent
      this.media_recorder.addEventListener("stop", () => {
        // this.download_link = new File([blobs_recorded], 'name', {type: 'video/webm', lastModified: Date.now()});
        this.player_link = window.webkitURL.createObjectURL(
          new Blob(this.blobs_recorded, { type: "video/webm" })
        );
      });
      // start recording with each recorded blob having 1 second video
      this.media_recorder.start(1000);
    },
    pauseRec() {
      this.status = "Paused";
      this.media_recorder.pause();
    },
    resumeRec() {
      this.status = "Resumed";
      this.media_recorder.resume();
    },
    stopRec() {
      this.status = "Stopped";
      this.media_recorder.stop();
      this.doneRecording = true;
    },
    onUpload() {
      this.$emit("loading");
      // console.log("fired");
      // console.log(this.firename);
      // console.log(this.player_link);
      const storage = getStorage();
      const storageRef = ref(storage, this.firename);

      // 'file' comes from the Blob or File API
      var videoFile = new File(this.blobs_recorded, "file", {
        type: "video/mp4",
      });
      uploadBytes(storageRef, videoFile).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        this.$emit("updone");
      });
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
