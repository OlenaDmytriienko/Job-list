<script setup>
import '@/style/about.scss'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <div class="container about" id="app">
    <div class="main"> 
       <div class="header">
          <h2 class="header__title">Job Details</h2>
          <div class="header__box">
            <div class="header__box-item">
            <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z" stroke="#70778B" stroke-width="2"/>
           </svg>
          <p>Save to my list</p></div>
          <div class="header__box-item">
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z" fill="#70778B"/>
          </svg>
          <p>Share</p>
          </div>
          </div>
       </div>
<button type="button" class="header__btn block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Apply now</button>

<div class="main__header">
<h3 class="main__title">{{vacancy.title}}</h3>
<div class="main__item">
 <h4 class="main__price">€ {{vacancy.salary}}</h4>
 <p class="main__price1">Brutto, per year</p>
</div>
</div>
<p class="main__time">Posted {{timeSince(vacancy.createdAt)}}</p>
<p class="main__text">  {{vacancy.description}}</p>
<h5 class="main__title2">Resposobilities</h5>
<p class="main__text">{{vacancy.description}}</p>
<h5 class="main__title2">Compensation & Benefits</h5>
<p class="main__text" v-for="i in vacancy?.benefits?.length??0">{{vacancy.benefits[i-1]}}</p>
<p class="main__text" v-for="i in vacancy?.benefits?.length??0"></p>
<button type="button" class="main__btn mb-3,5 block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Apply now</button>

<div>
<h3 class="main__title1">Additional info</h3>     
</div>
<p class="main__posttitle" >Employment type</p>
<div class="main__box">
          <button class="main__box-btn" v-for="n in vacancy?.employment_type?.length ?? 0"> {{vacancy?.employment_type[n-1]}}</button>
      
</div>
<p class="main__posttitle">Benefits</p>
<div class="main__box1">
          <button class="main__box-btn1" v-for="i in vacancy?.benefits?.length ?? 0">{{vacancy.benefits[i-1]}}</button>
          
</div>
<h3 class="main__title1">Attached images</h3>
<div class="main__box-img">
          <img  class="main__img" :src="vacancy.pictures[n-1]" :alt="vacancy.title"  v-for="n in vacancy?.pictures?.length ?? 0" >
          
</div>

</div>
<div  id="map">
  <div class="map__info" style="width: 365px; height: 218px;">
   
<h5 class="main__title3">{{vacancy.name}}</h5>
 <div class="box__item1 ">
<svg class="box__svg" width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="box__svg" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z" fill="#878D9D"/>
</svg>
<p class="box__item-text1">Vienna, Austria {{vacancy.address}}</p>
  </div>
  <p class="map__text">{{vacancy.phone}}</p>
   <p class="map__text">{{vacancy.email}}</p>
    <div class="map__circle"></div>
  </div>
    <GMapMap
      :center="center"
      :zoom="3"
      :options="options"
      map-type-id="terrain"
      style="width: 365px; height: 218px"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
      :options="options"
      :zoom="7"
      :key="index"
      v-for="(m, index) in markers"
      :clickable="false"
      :draggable="false"
      @click="center=m.position"
      :icon= '{
          url: "https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg",
          scaledSize: {width: 77, height: 77},
          labelOrigin: {x: 16, y: -10}
      }'
      />
    </GMapCluster>
  </GMapMap>
                          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163730.620118683!2d28.945922357964257!3d49.50142954816529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2ses!4v1664620980734!5m2!1sru!2ses" width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                    </div> 
</div>

<router-link :to="`/`"><button @click="goHome()" class="main__btn1 mb-3,5 block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> <svg width="10" height="18" viewBox="0 0 10 18" fill="rgba(230, 233, 242, 1)" xmlns="http://www.w3.org/2000/svg" class="main__btn1-text">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z" fill="#384564"/>
</svg><p class="main__btn1-text">RETURN TO JOB BOARD</p> </button></router-link>

<!-- <p>{{'The id is: ' + this.$route.params.vacancy}}</p>
<button @click="test()">Click</button> -->
</template>



<script >
export default {
  name: 'App',
 data () {
    return {
        api: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
        headers: {'Content-Type': 'application/json', 'access_token':'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'},
        vacancy: {},
        center: {lat: 51.093048, lng: 6.842120},
        options: {
          styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#343a50',
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#303341',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#3c445a',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#3c445a',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
          {
            featureType: 'road',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2b3248',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2b3248',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#2b3248',
              },
            ],
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2b3248',
              },
            ],
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2b3248',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#202336',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#979dad',
              },
            ],
          },
        ],
      },
          markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ]
    }
  },
methods: {
   async requestTo(api, id) {      
      try {
        const response = await fetch(api, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
            .then(this.parseJSON);
        console.log(response)
          this.vacancies = response;
          this.vacancy = response.find(x => x.id === id)
          this.center = {lat: this.vacancy.location.lat, lng: this.vacancy.location.long}
      } catch (error) {
        this.error = error
      }
    },
     checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    },
    parseJSON: function (resp) {
      return (resp.json ? resp.json() : resp);
    },
    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    },
 timeSince(dateString) {
  let date = new Date(dateString);
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;
  
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }        
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
},
},
goHome(){
    this.$router.push('/')
  },
 async mounted() {
  await this.requestTo(this.api, this.id)
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id: async function (id) {
      await this.requestTo(this.api, id)
    },
  },
}

</script>




