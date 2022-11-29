<template>
  <div class="main">
   <Navigation class="navigation" />
    <router-view v-bind:cities="cities"/>
  </div>
</template>

<script>
import axios from 'axios'
import db from "./firebase/firebaseinit";

import Navigation from './components/Navigation.vue';
export default {
  name: "App",
  components: {
    Navigation
  },
  data  () {
    return {
      /*APIKey: "9cb3a28a93b44bef9e6212429222511", -> FROM WeatherAPI
      TODO
      Figure how to load weather condition dynamically 
      extract info from //cdn.weatherapi.com/weather/64x64/night/116.png
      to
      <img :src="require(`../../public/conditions/${this.city.currentWeather.current.condition.icon}.svg `)" alt="">
      */
      
      APIKey: "6c8fb6b8546919771ca8dee0fbaa5a7e", //Open =weather API
      // city: "California",
      cities: [],
    };
  },
  // life cycle hook
  created() {
    // this.getCurrentWeather();
    this.getCityWeather()
  },
  methods: {
    getCityWeather() {
      let firebaseDB = db.collection('cities');

      // onSnapshot -> firebase realtime listner
      firebaseDB.onSnapshot(snap => {
        snap.docChanges().forEach(async(doc) => {
          // console.log(doc.doc.data().city);
          if(doc.type === 'added'){
            try{
                const response = await axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&APPID=${this.APIKey}`)
                // http://api.weatherapi.com/v1/current.json?key=${this.APIKey}&q=${doc.doc.data().city}
                const data = response.data;
                // console.log(data);
                firebaseDB.doc(doc.doc.id).update({
                  currentWeather: data,
                }).then(() => {
                  this.cities.push(doc.doc.data());
                // }).then(() => {
                  console.log(this.cities);
                });
              } catch(err){
              console.log(err);
            }
          }
        });
      })
    },
    // getCurrentWeather(){
    //   axios.get(
    //     `http://api.weatherapi.com/v1/current.json?key=${this.APIKey}&q=${this.city}`
    //     ).then(res => {
    //       console.log(res.data);
    //     });
    // }
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.main{
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  // .navigation {
  //   z-index: 99;
  //   position: fixed;
  //   max-width: 1024px;
  //   width: 100%;
  //   box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06) ;
  // }
  .container {
    padding: 0 20px;
  }
}
</style>
