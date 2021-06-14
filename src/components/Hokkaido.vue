<template>
  <li id="list_hokkaido">
    <div id="overlay" v-bind:class="{ hidden: isActive }" @click="change"></div>
    <a href="#" id="hokkaidou_area" @click="change">北海道</a>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

#list_hokkaido {
  position: relative;
  top: 40px;
  left: 69%;
  /* top: 150px;
  left: 63%; */
}

#list_hokkaido > a {
  padding: 3px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
}
</style>
