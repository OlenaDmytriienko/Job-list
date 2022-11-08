<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import { RouterLink, RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';
import '@/style/index.scss'
import img from '@/assets/hospital.jpg'
</script>

<template class="test1" id="app">
 <div class="test">
  <div class="page__wrapper">
<div class="container">
<div class="wraper__box">
<div class="box "  v-for="(vacancy) in vacancies">
<img class="box__img" :src="vacancy.pictures[0]" alt="">
<div class="box__item ">
    <h4 class="box__item-title " >  <router-link :to="`/about/${vacancy.id}`"> {{vacancy.title}}</router-link> </h4>
  <p class="box__item-text ">Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH</p>
  <div class="box__item1 ">
<svg class="box__svg" width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="box__svg" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z" fill="#878D9D"/>
</svg>
<p class="box__item-text bg-white">Vienna, Austria {{vacancy.address}}</p>
  </div>
</div>
<div class="box__stars flex justify-end"> 
<div class="flex  items-center " v-for="n in 5">
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 " fill="#38415D" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-if="n <= vacancy.benefits.length"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-else><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
</div>
<div class="box__item2">
  <svg class="box__item2-save" width="16" height="20" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z" stroke="#70778B" stroke-width="2"/>
</svg>
  <p class="box__item2-text">{{timeSince(vacancy.createdAt)}} </p>
</div>
</div>
</div>
</div>
  </div>
 
 <!-- <RouterLink to="/about">About</RouterLink> -->
 <!-- <RouterView /> -->

      <div class="pagination flex justify-center">
        <nav class="isolate inline-flex -space-x-px rounded-md " aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center shadow-sm rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5 bg-inherit" aria-hidden="true" @click="onPrevPage()" v-if="n+page-2>0"/>
            <ChevronLeftIcon class="h-5 w-5 bg-inherit" aria-hidden="true" v-else/>

          </a>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <span v-for="n in pagePaginationCount" >
          <a href="#" id="pages" @click="onPaginationBtnClick(n+page-2)" v-if="page == n+page-2" v-show="n+page-2>0 && n+page-2<pageCount" class=" active relative inline-flex items-center border  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{n+page-2}}</a>
          <a href="#" id="pages" @click="onPaginationBtnClick(n+page-2)" v-else v-show="n+page-2>0 && n+page-2<pageCount" class="relative inline-flex items-center border  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{n+page-2}}</a>
          </span><span v-if="page<pageCount-3" class="relative inline-flex items-center border  bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
          <a href="#" id="pages"  @click="onPaginationBtnClick(pageCount)" class="relative inline-flex items-center border  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{pageCount}}</a>
          <a href="#" id="pages" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <span class="sr-only">Next</span>
            <ChevronRightIcon id="next" class="h-5 w-5 bg-inherit" aria-hidden="true" @click="onNextPage()" v-if="n+page-2<=pageCount"/>
          <ChevronRightIcon id="next" class="h-5 w-5 bg-inherit" aria-hidden="true" v-else/>
          </a>
        </nav>
      </div>
</div>
 
  <!-- <router-view/> -->
</template>

<script>
export default {
  name: 'App',
 data () {
    return {
        api: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
        headers: {'Content-Type': 'application/json', 'access_token':'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'},
        vacancies: [],
        page: 1,
        pageString: '&page=',
        pageCount: 18,
        pagePaginationCount: 5,
    }
  },
  methods: {
       async requestTo(api) {
      try {
        const response = await fetch(api, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
            .then(this.parseJSON);
          this.vacancies = response;
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
async onNextPage(){
  this.page++
  await this.requestTo(this.api) // + this.pageString + this.page.toString())
},
async onPrevPage(){
  this.page--
  await this.requestTo(this.api) // + this.pageString + this.page.toString())
},
async onPaginationBtnClick(page){ 
  this.page = page;
  await this.requestTo(this.api) // this.pageString + this.page.toString()
},
  },
  async mounted () {
    this.requestTo(this.api)
  },
  goToAbout(){
    this.$router.push('/about')
  },
  watch: {
    pageCount(newPageCount) {
      if(newPageCount <= 5){
      this.pagePaginationCount = newPageCount;
      } else {
      this.pagePaginationCount = 5;
      }
    }
  }
}

</script>




