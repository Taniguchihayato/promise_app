<template>
  <li id="list_tohoku">
    <div id="overlay" v-bind:class="{hidden: isActive}" @mouseover="change"></div>
    <a href="#" id="tohoku_area" @mouseover="change">東北</a>
    <ul id="area" v-bind:class="{hidden: isActive}">
      <li><a href="#">青森</a></li>
      <li><a href="#">秋田</a></li>
      <li><a href="#">岩手</a></li>
      <li><a href="#">山形</a></li>
      <li><a href="#">宮城</a></li>
      <li><a href="#">福島</a></li>
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
        this.isActive = !this.isActive;
      }
    }
  }
</script>


<style scoped>
  li {
    list-style: none;
  }

  #list_tohoku {
  position: relative;
  top: 130px;
  left: 59%;
}

#list_tohoku > a {
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
  width: 140px;
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