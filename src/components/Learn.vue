<template>
  <div class="">
    <site-header :title="chapterTitle"></site-header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <chapter-section v-for="section in sections" class="swiper-slide" :content="section.fields.content"></chapter-section>
        </div>
        
        <!-- If we need navigation buttons -->
        <div class="footer-nav">
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="status"> {{ currentSectionIndex }} / {{ chapterLength }}</div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div>
      </div>
  </div>
  
</template>

<script>
import Header from './Header'
import Section from './Section'

import contentfulAPI from '../services/contentful'

import Swiper from 'swiper'

let swiper
let swiperInitFlag = false

export default {
  name: 'learn',
  data () {
    return {
      chapterTitle: 'What Can Loved Ones Do?',
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
    // to-do: not sure if this is the cleanest
    // lifecyle hook...basically I need to wait for
    // the contentful api call to return and the
    // swiper slides to be in the dom, I'm pretty sure
    // that this is called when those slides get created
    this.initializeSwiper()
  },
  destroyed () {
    swiperInitFlag = false
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
          this.chapterLength = chapter.sections.length + ''
        })
        .catch((error) => {
          console.log('error occurred')
          console.log(error)
        })
    },
    initializeSwiper () {
      if (swiperInitFlag) {
        return
      }
      console.log('intializing swiper')
      swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onReachEnd: this.endOfChapter,
        onSlideChangeStart: (swiper) => {
          this.currentSectionIndex = (swiper.activeIndex + 1) + ''
        }
      })
      // this is stupid but eslint won't let me assign swiper without
      // using it...not sure what to do here
      swiper

      swiperInitFlag = true
    },
    endOfChapter () {
      console.log('you have reached the end of this chapter!!')
      const route = this.$route
      const currentChapterId = parseInt(route.params.chapterId)
      const nextChapterId = (currentChapterId + 1) + ''
      if (nextChapterId < 3) {
        // this.$router.push({ name: route.name, params: {chapterId: nextChapterId} })
      }
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
