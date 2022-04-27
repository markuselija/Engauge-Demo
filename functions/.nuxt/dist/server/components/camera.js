exports.ids = [1];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("50994110", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camera_vue_vue_type_style_index_0_id_390e23ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camera_vue_vue_type_style_index_0_id_390e23ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camera_vue_vue_type_style_index_0_id_390e23ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camera_vue_vue_type_style_index_0_id_390e23ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camera_vue_vue_type_style_index_0_id_390e23ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".camera-box[data-v-390e23ad]{border:1px dashed;border-radius:4px;padding:8px;min-height:300px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Camera.vue?vue&type=template&id=390e23ad&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h3 data-v-390e23ad>"+_vm._ssrEscape(_vm._s(_vm.status))+"</h3>"),_vm._ssrNode("<div class=\"camera-box\" data-v-390e23ad>","</div>",[(!_vm.doneRecording)?_vm._ssrNode("<div class=\"text-center\" style=\"height: 200px\" data-v-390e23ad>","</div>",[(!_vm.isCameraOpen)?_c('v-icon',{staticClass:"mt-8 button-img camera-shoot",staticStyle:{"height":"25px"}},[_vm._v("mdi-camera")]):_c('div',{staticClass:"camera-canvas"},[_c('video',{ref:"camera",attrs:{"disablePictureInPicture":"","width":_vm.canvasWidth,"height":_vm.canvasHeight,"autoplay":"","muted":""},domProps:{"muted":true}}),_c('canvas',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"canvas",attrs:{"id":"photoTaken","width":_vm.canvasWidth,"height":_vm.canvasHeight}})])],1):_vm._ssrNode(("<div class=\"text-center\" style=\"height: 200px\" data-v-390e23ad><div data-v-390e23ad><video controls=\"controls\" disablePictureInPicture"+(_vm._ssrAttr("width",_vm.canvasWidth))+(_vm._ssrAttr("height",_vm.canvasHeight))+" data-v-390e23ad><source"+(_vm._ssrAttr("src",_vm.player_link))+" type=\"video/webm\" data-v-390e23ad></video></div></div>"))]),_vm._ssrNode("<div class=\"text-center mt-6\" data-v-390e23ad>","</div>",[(_vm.doneRecording)?_c('v-btn',{staticClass:"white--text",attrs:{"large":""},on:{"click":function($event){return _vm.onUpload()}}},[_c('v-icon',[_vm._v("mdi-upload")]),_vm._v("Upload")],1):_vm._e()],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Camera.vue?vue&type=template&id=390e23ad&scoped=true&lang=pug&

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__(101);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Camera.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import firebase from "firebase/app";

/* harmony default export */ var Cameravue_type_script_lang_js_ = ({
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
      status: ""
    };
  },

  props: {
    pname: {
      type: String,
      default: "Parent"
    },
    sname: {
      type: String,
      default: "Student"
    }
  },
  computed: {
    firename() {
      var d = Date.now();
      var dstrunf = new Date(d);
      var dstr = dstrunf.toUTCString();
      return dstr + " " + this.pname + " - " + this.sname;
    }

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
      const constr = window.constraints = {
        audio: true,
        video: true
      };
      navigator.mediaDevices.getUserMedia(constr).then(stream => {
        this.camera_stream = stream;
        this.$refs.camera.srcObject = stream;
      }).catch(error => {
        alert("Browser does not support or there was an error" + error);
      });
      this.status = "Ready";
    },

    startRec() {
      this.startCam();
      this.status = "Recording"; // let local_link = null;

      this.media_recorder = new MediaRecorder(this.camera_stream, {
        mimeType: "video/webm"
      });
      this.doneRecording = false; // event : new recorded video blob available

      this.media_recorder.addEventListener("dataavailable", e => {
        this.blobs_recorded.push(e.data);
      }); // event : recording stopped & all blobs sent

      this.media_recorder.addEventListener("stop", () => {
        // this.download_link = new File([blobs_recorded], 'name', {type: 'video/webm', lastModified: Date.now()});
        this.player_link = window.webkitURL.createObjectURL(new Blob(this.blobs_recorded, {
          type: "video/webm"
        }));
      }); // start recording with each recorded blob having 1 second video

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
      this.$emit("loading"); // console.log("fired");
      // console.log(this.firename);
      // console.log(this.player_link);

      const storage = Object(storage_["getStorage"])();
      const storageRef = Object(storage_["ref"])(storage, this.firename); // 'file' comes from the Blob or File API

      var videoFile = new File(this.blobs_recorded, "file", {
        type: "video/mp4"
      });
      Object(storage_["uploadBytes"])(storageRef, videoFile).then(snapshot => {
        console.log("Uploaded a blob or file!");
        this.$emit("updone");
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Camera.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cameravue_type_script_lang_js_ = (Cameravue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(21);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(31);

// CONCATENATED MODULE: ./components/Camera.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cameravue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "390e23ad",
  "090f8a00"
  
)

/* harmony default export */ var Camera = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=camera.js.map