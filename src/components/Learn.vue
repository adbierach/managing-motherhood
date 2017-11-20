<template>
  <div class="">
    <site-header :title="chapterTitle"></site-header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <chapter-section v-for="section in sections" class="swiper-slide" :content="section.fields.content"></chapter-section>
      </div>
    </div>
    <div v-if="isLoading" class="loader-wrapper"><div class="swiper-lazy-preloader"></div></div>
    <div class="footer-nav">
      <div v-on:click="prevSlide" class="swiper-button-prev swiper-button-white"></div>
      <div class="status"> {{ currentSectionIndex }} / {{ chapterLength }}</div>
      <div v-on:click="nextSlide" class="swiper-button-next swiper-button-white"></div>
    </div>
  </div>
  
</template>

<script>
import Header from './Header'
import Section from './Section'

import contentfulAPI from '../services/contentful'

import Swiper from 'swiper'

// make swiper instance globally available
let swiper

export default {
  name: 'learn',
  data () {
    return {
      chapterTitle: '',
      chapterLength: '',
      currentSectionIndex: '1',
      sections: [],
      isLoading: true
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
  },
  watch: {
    '$route': 'fetchData'
  },
  components: {'site-header': Header, 'chapter-section': Section},
  methods: {
    fetchData () {
      this.isLoading = true

      contentfulAPI.getEntries({
        'fields.chapterId': this.$route.params.chapterId,
        'content_type': 'chapter'
      })
        .then((response) => {
          let chapter = response.items[0].fields
          this.chapterTitle = chapter.title
          this.sections = chapter.sections
          this.chapterLength = chapter.sections.length + ''
          this.isLoading = false

          // I don't love this, but basically I need to wait until the DOM
          // has been updated with the data above, and because to my knowledge
          // the only lifecycle hook that gets called is 'update' if we're on
          // the second chapter this seems better than having it called every time
          // there is an update
          setTimeout(() => {
            // Clear out swiper if there is one
            if (swiper) {
              swiper.destroy(true, true)
            }
            // Initialize swiper with returned data
            this.initializeSwiper()
          }, 50)
        })
        .catch((error) => {
          console.log('error occurred')
          console.log(error)
        })
    },
    initializeSwiper () {
      swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'horizontal',
        direction: 'vertical',
        onlyExternal: true,
        keyboardControl: true,
        // Navigation arrows
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        onSlideChangeStart: (swiper) => {
          this.currentSectionIndex = (swiper.activeIndex + 1) + ''
        }
      })

      this.currentSectionIndex = '1'
    },
    nextSlide () {
      if (swiper.isEnd) {
        this.nextChapter()
      } else {
        swiper.slideNext()
      }
    },
    prevSlide () {
      if (swiper.isBeginning) {
        this.prevChapter()
      } else {
        swiper.slidePrev()
      }
    },
    nextChapter () {
      const route = this.$route
      const currentChapterId = parseInt(route.params.chapterId)
      const nextChapterId = (currentChapterId + 1) + ''

      if (nextChapterId === '8') {
        this.$router.push({ name: 'PlanBuild' })
      } else {
        this.$router.push({ name: route.name, params: {chapterId: nextChapterId} })
      }
    },
    prevChapter () {
      const route = this.$route
      const currentChapterId = parseInt(route.params.chapterId)
      const prevChapterId = (currentChapterId - 1) + ''
      // Route home if we're on first chapter
      if (prevChapterId === '-1') {
        this.$router.push({ name: 'Home' })
      } else {
        this.$router.push({ name: route.name, params: {chapterId: prevChapterId} })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 

.loader-wrapper {
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    top: 50px;
    z-index: 1;
}
.swiper-container {
    width: 100%;
    height: calc(100% - 100px);
}

.footer-nav {
  width: 100%;
  height: 70px;
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
    width: 50px;
    height: 50px;
    margin-top: -23px;

    -moz-background-size: 27px 25px;
    -webkit-background-size: 27px 25px;
    background-size: 27px 25px;

    background-color: #CBCE00;
    padding: 17px;
    border-radius: 4px;
    transform: rotate(90deg);
} 

</style>
