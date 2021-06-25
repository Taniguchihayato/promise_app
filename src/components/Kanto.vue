<template>
  <li id="list_kanto">
    <div
      id="overlay"
      v-bind:class="{ hidden: isActive }"
      @mouseover="change"

    ></div>
    <a href="#" @mouseover="change">
      <div class="kanto">関東</div>
      </a>
    <ul id="area" v-bind:class="{ hidden: isActive }">
      <li><a href="#">東京</a></li>
      <li><a href="#">神奈川</a></li>
      <li><a href="#">千葉</a></li>
      <li><a href="#">埼玉</a></li>
      <li><a href="#">栃木</a></li>
      <li><a href="#">群馬</a></li>
      <li><a href="#">茨城</a></li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
      console.log('切り替わる')
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

#list_kanto {
  position: relative;
  top: 270px;
  left: 8%;
  /* backface-visibility: hidden; */
}

#list_kanto > a {
  /* padding: 3px; */
  padding: 10px;
  /* display: inline-block; */
}

.kanto {
  padding: 1px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
  text-decoration: none;
  display: inline-block;
}

#area {
  position: absolute;
  top: 23px;
  left: 45%;
  width: 170px;
  height: 50px;
  list-style: none;
  border: solid 2px #76ae25;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  background: #fff;
  z-index: 2;
}

#area a {
  color: black;
  padding-left: 15px;
  font-size: 11px;
}

#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.hidden {
  display: none !important;
}
</style>
