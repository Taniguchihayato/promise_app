<template>
  <li id="list_kansai">
    <div id="overlay" v-bind:class="{ hidden: isActive }" @mouseover="change"></div>
    <a href="#" id="kansai_area" @mouseover="change">関西</a>
    <ul id="area" v-bind:class="{ hidden: isActive }">
      <li><a href="#">大阪</a></li>
      <li><a href="#">京都</a></li>
      <li><a href="#">兵庫</a></li>
      <li><a href="#">奈良</a></li>
      <li><a href="#">滋賀</a></li>
      <li><a href="#">和歌山</a></li>
      <li><a href="#">三重</a></li>
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

#list_kansai {
  position: relative;
  top: 260px;
  right: 15%;
}

#list_kansai > a {
  padding: 3px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
  text-decoration: none;
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
