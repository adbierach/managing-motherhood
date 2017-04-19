<template>
  <div class="">
    <site-header></site-header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <chapter-section v-for="section in sections" class="swiper-slide" :content="section.fields.content"></chapter-section>
        <div class="swiper-slide end-slide">
          <div class="container">
            <div class="row">
              <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 content-wrapper">
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

import contentfulAPI from '../services/contentful'

import Swiper from 'swiper'

let swiper

export default {
  name: 'learn',
  data () {
    return {
      chapterTitle: '',
      chapterLength: '',
      currentSectionIndex: '1',
      sections: []
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
      contentfulAPI.getEntries({
        'fields.chapterId': this.$route.params.chapterId,
        'content_type': 'chapter'
      })
        .then((response) => {
          let chapter = response.items[0].fields
          this.chapterTitle = chapter.title
          this.sections = chapter.sections
          // adding one for our end slide
          this.chapterLength = chapter.sections.length + 1 + ''
          console.log('data is back!')
          // I don't love this, but basically I need to wait until the DOM
          // has been updated with the data above, and because to my knowledge
          // the only lifecycle hook that gets called is 'update' if we're on
          // the second chapter this seems better than having it called every time
          // there is an update
          setTimeout(() => {
            this.initializeSwiper()
          }, 50)
        })
        .catch((error) => {
          console.log('error occurred')
          console.log(error)
        })
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
