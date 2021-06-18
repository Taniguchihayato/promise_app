<template>
  <li id="list_hokkaido">
    <div id="overlay" v-bind:class="{ hidden: isActive }" @click="change"></div>
    <a href="#" id="hokkaidou_area" @click="change">沖縄</a>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

#list_hokkaido {
  position: relative;
  top: 175px;
  left: 25%;
}

#list_hokkaido > a {
  padding: 3px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
  text-decoration: none;
}
</style>
