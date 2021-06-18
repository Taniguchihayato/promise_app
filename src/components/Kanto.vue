<template>
  <li id="list_kanto">
    <div id="overlay" v-bind:class="{ hidden: isActive }" @mouseover="change"></div>
    <a href="#" id="kanto_area" @mouseover="change">関東</a>
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
    }
  },
  methods: {
    change() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
li {
  list-style: none;
}

#list_kanto {
  position: relative;
  top: 195px;
  left: 52%;
}

#list_kanto > a {
  padding: 3px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
  text-decoration: none;
}

#area {
  position: absolute;
  top: 23px;
  left: 0;
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
