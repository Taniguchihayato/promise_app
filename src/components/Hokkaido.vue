<template>
  <li id="list_hokkaido">
    <!-- <div id="overlay" v-bind:class="{ hidden: isActive }" @click="change"></div> -->
    <a href="http://www.pref.hokkaido.lg.jp/" id="hokkaidou_area">北海道</a>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

#list_hokkaido {
  position: relative;
  top: 57px;
  left: 28%;
  /* top: 150px;
  left: 63%; */
}

#list_hokkaido > a {
  padding: 3px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
  text-decoration: none;
}
</style>
