<template>
  <div>
    <div id="map">
      <h2>地図から探す</h2>
      <div id="mapMiddle">
        <div>
          <section id="mapSearch">
            <div id="list">
              <ul class="mapList">
                <Hokkaido />
                <Tohoku />
                <Kanto />
                <Tyubu />
                <Kansai />
                <Tyugoku />
                <Shikoku />
                <Kyushu />
                <Okinawa />
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tohoku from "@/components/Tohoku.vue"
import Kanto from "@/components/Kanto.vue"
import Tyubu from "@/components/Tyubu.vue"
import Kansai from "@/components/Kansai.vue"
import Tyugoku from "@/components/Tyugoku.vue"
import Shikoku from "@/components/Shikoku.vue"
import Kyushu from "@/components/Kyushu.vue"
import Hokkaido from "@/components/Hokkaido.vue"
import Okinawa from "@/components/Okinawa.vue"
export default {
  name: "Map",
  components: {
    Tohoku,
    Kanto,
    Tyubu,
    Kansai,
    Tyugoku,
    Shikoku,
    Kyushu,
    Hokkaido,
    Okinawa,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
}

#map {
  width: 95%;
  border: solid 2px #76ae25;
  margin: 0 auto;
  background: linear-gradient(#fff 0%, #B4E9F0 60%, #B4E9F0 100%);
}

#map h2 {
  background-color: #76ae25;
  text-align: center;
  color: #fff;
}

#mapMiddle {
  position: relative;
  height: 430px;
}

#mapSearch {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin: auto;
  /* background-image: url("https://nureyon.com/sample/20/japanese_archipelago-1-p12.svg?1602963933"); */
  background-image: url("https://frame-illust.com/fi/wp-content/uploads/2017/06/japanesemap-10012.png");
  background-size: cover;
  width: 390px;
  height: 390px;
  /* width: 500px;
  height: 360px; */
  padding: 10px;
  /* z-index: 1; */
}

.mapList {
  list-style: none;
}
</style>