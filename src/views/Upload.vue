<template>
  <div>
    <div>
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" />
    </div>
    <div>
      <p>
        進行中: {{ uploadValue.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue" max="100"></progress>
      </p>
    </div>
    <div v-if="imageData != null">
      <img class="preview" :src="picture" />
      <br />
      <button @click="onUpload">Upload</button>
    </div>
    <div v-for="onePicture in pictures" :key="onePicture.id">
      <img v-bind:src="onePicture.text" width="600" height="400" />
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase"

export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      pictures: [],
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
    },

    onUpload() {
      this.picture = null
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData)
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (error) => {
          console.log(error.message)
        },
        () => {
          this.uploadValue = 100
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url
            const gazou = {
              text: this.picture,
            }
            firebase.firestore().collection("pictures").add(gazou)
          })
        }
      )
    },
  },
  created() {
    firebase
      .firestore()
      .collection("pictures")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.pictures.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>
<style scoped="">
img.preview {
  width: 200px;
}
</style>
