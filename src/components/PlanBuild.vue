<template>
  <div class="">
    <site-header></site-header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide start-slide">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 content-wrapper">
                <p>It’s helpful to have a plan in place to help when you are feeling overwhelmed, upset, depressed, anxious or just stressed. Fill in this list so that you can create your own care plan.</p>
              </div>
            </div>
          </div>
        </div>
<!--         <chapter-section v-for="section in sections" class="swiper-slide" :content="section.fields.content"></chapter-section> -->
        <div v-for="question in carePlan" class="swiper-slide">
          <div class="container">
            <div class="row">
              <div v-if="question.type === 'textarea'" class="col-md-6 col-md-offset-3 content-wrapper">
                  <h3>{{ question.prompt }}</h3>
                  <textarea v-bind:placeholder="question.placeholder" v-model="question.value"></textarea>
              </div>
              <div v-if="question.type === 'checkbox'" class="col-md-6 col-md-offset-3 content-wrapper">
                  <h3>{{ question.prompt }}</h3>
                  <div v-for="option in question.options" class="checkbox">
                    <label>
                      <input type="checkbox" id="checkbox" v-model="option.checked"> {{ option.text }}
                    </label>
                    <input v-if="option.checked" v-model="option.data">
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide end-slide">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 content-wrapper">
                <button v-on:click="nextChapter" class="btn btn-lrg">Continue</button>
                <p>or</p>
                <router-link to="/"><button class="btn btn-lrg">Go Home</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-nav">
      <div class="swiper-button-prev swiper-button-white swiper-button-disabled"></div>
      <div class="status"> {{ currentSectionIndex }} / {{ chapterLength }}</div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
  </div>
  
</template>

<script>
import Header from './Header'
import Section from './Section'

import Swiper from 'swiper'

import carePlan from '../services/plan'

let swiper

export default {
  name: 'learn',
  data () {
    return {
      chapterTitle: '',
      chapterLength: '',
      currentSectionIndex: '1',
      sections: [],
      carePlan: carePlan
    }
  },
  computed: {
  },
  created () {
    this.fetchData()
  },
  updated () {
  },
  destroyed () {
    console.log('destroyed!!')
  },
  watch: {
    '$route': 'fetchData'
  },
  components: {'site-header': Header, 'chapter-section': Section},
  methods: {
    fetchData () {
      setTimeout(() => {
        this.initializeSwiper()
      }, 50)
    },
    initializeSwiper () {
      console.log('intializing swiper')
      swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onSlideChangeStart: (swiper) => {
          this.currentSectionIndex = (swiper.activeIndex + 1) + ''
          window.localStorage.setItem('plan', JSON.stringify(this.carePlan))
        }
      })
      this.currentSectionIndex = '1'
    },
    nextChapter () {
      console.log('you have reached the end of this chapter!!')
      const route = this.$route
      const currentChapterId = parseInt(route.params.chapterId)
      const nextChapterId = (currentChapterId + 1) + ''
      // clean up current swiper
      swiper.destroy(true, true)
      this.$router.push({ name: route.name, params: {chapterId: nextChapterId} })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.swiper-container {
    width: 100%;
    height: calc(100% - 100px);
}

.footer-nav {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #372F2D;
}

.status {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
} 

.swiper-button-prev, .swiper-button-next {
    width: 27px;
    height: 25px;
    margin-top: -16px;

    -moz-background-size: 27px 25px;
    -webkit-background-size: 27px 25px;
    background-size: 27px 25px;

    background-color: #CBCE00;
    padding: 17px;
    border-radius: 4px;
}  
</style>
