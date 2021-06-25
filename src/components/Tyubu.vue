<template>
  <li id="list_tyubu">
    <div
      id="overlay"
      v-bind:class="{ hidden: isActive }"
      @mouseover="change"
    ></div>
    <a href="#" id="tyubu_area" @mouseover="change">中部</a>
    <ul id="area" v-bind:class="{ hidden: isActive }">
      <!-- <li><a href="#">愛知</a></li> -->
      <li><router-link to="/Masaki/">愛知</router-link></li>
      <li><a href="#">新潟</a></li>
      <li><a href="#">静岡</a></li>
      <li><a href="#">富山</a></li>
      <li><a href="#">長野</a></li>
      <li><a href="#">石川</a></li>
      <li><a href="#">岐阜</a></li>
      <li><a href="#">山梨</a></li>
      <li><a href="#">福井</a></li>
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
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

#list_tyubu {
  position: relative;
  top: 250px;
  right: 5%;
}

#list_tyubu > a {
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
  width: 190px;
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
