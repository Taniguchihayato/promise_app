<template>
  <div class="app">
    <header>
      <h1>Responsive Image Gallery Using HTML And CSS</h1>
    </header>
    <div class="gallery">
      <div class="content">
        <img
          src="https://unsplash.com/photos/USvLD8EzBtA/download?force=true&w=640"
        />
        <h3>Gallery 1S/h3>
      </div>
      <div class="content">
        <img
          src="https://unsplash.com/photos/trELt4tpj7w/download?force=true&w=640"
        />
        <h3>Gallery 2</h3>
      </div>
      <div class="content">
        <img
          src="https://www.neverendingvoyage.com/wp-content/uploads/2019/09/kyoto-japan-26.jpg"
        />
        <h3>Gallery 3</h3>
      </div>
      <div class="content">
        <img
          src="https://www.neverendingvoyage.com/wp-content/uploads/2019/09/kyoto-japan-26.jpg"
        />
        <h3>Gallery 4</h3>
      </div>
    </div>
    <div class="gallery">
      <div class="content">
        <img
          src="https://unsplash.com/photos/USvLD8EzBtA/download?force=true&w=640"
        />
        <h3>Gallery 1</h3>
      </div>
      <div class="content">
        <img
          src="https://unsplash.com/photos/trELt4tpj7w/download?force=true&w=640"
        />
        <h3>Gallery 2</h3>
      </div>
      <div class="content">
        <img
          src="https://unsplash.com/photos/nY4rJlJoMsY/download?force=true&w=640"
        />
        <h3>Gallery 3</h3>
      </div>
      <div class="content">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/37/6f/be.jpg"
        />
        <h3>Gallery 4</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      images: [
        "https://dummyimage.com/800/ffffff/000000",
        "https://dummyimage.com/1600/ffffff/000000",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff",
      ],
      index: null,
    };
  },
};
</script>
<style>
.HiroyukiImage {
  width: 75px;
  height: 75px;
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
}
.content:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
img {
  width: 100%;
  height: auto;
}
h3 {
  text-align: center;
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

.image {
  width: 22%;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  float: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
