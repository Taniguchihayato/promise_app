<template>
  <li id="list_tyugoku">
    <div
      id="overlay"
      v-bind:class="{ hidden: isActive }"
      @mouseover="change"
    ></div>
    <a href="#" id="tyugoku_area" @mouseover="change">中国</a>
    <ul id="area" v-bind:class="{ hidden: isActive }">
      <li><a href="#">岡山</a></li>
      <li><a href="#">鳥取</a></li>
      <li><a href="#">広島</a></li>
      <li><a href="#">島根</a></li>
      <li><a href="#">山口</a></li>
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

#list_tyugoku {
  position: relative;
  top: 155px;
  left: 12%;
}

#list_tyugoku > a {
  padding: 3px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
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