<template>
  <div>
    <div>
      <h1>愛知県：豊橋市</h1>
      <h2>{{ display }}</h2>
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
      <button type="button" onclick="location.reload();">完了</button>
    </div>
    <div class="gallery">
      <div
        class="content"
        v-for="onePicture in pictures"
        :key="onePicture.id"
        style="background: url(http://www.netyasun.com/home/bk-img/b017.jpg)"
      >
        <!-- <p>{{ display }}</p> -->
        <a target="_blank" v-bind:href="onePicture.text">
          <img v-bind:src="onePicture.text" />
        </a>
        <button @click="likeButton" id="plus-button" class="like">
          好きボタン
        </button>
      </div>
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
      count: 0,
      display: "0 like",
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
    likeButton() {
      this.count += 1
      this.display = this.count + " like"
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
<style>
img.preview {
  width: 200px;
  height: 200px;
}
body {
  margin: 0;
  font-family: Nunito Sans;
}
h1 {
  text-align: center;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.content {
  width: 22%;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  float: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 9px solid #111311;
}
.content:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
img {
  width: 100%;
  height: auto;
}
@media (max-width: 1000px) {
  .content {
    width: 46%;
  }
}
@media (max-width: 750px) {
  .content {
    width: 100%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
