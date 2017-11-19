<template>
  <div class="">
    <site-header></site-header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="content-container swiper-slide start-slide">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 content-wrapper">
                <h1>Care Plan</h1>
                <p>This form will help you create a list of your personal self-help strategies. When you have filled out the sections, a personal care plan will be created for you. You will also have the option of emailing it to yourself so you can either print it out or keep it on your phone or computer.</p>
              </div>
            </div>
          </div>
        </div>
<!--         <chapter-section v-for="section in sections" class="swiper-slide" :content="section.fields.content"></chapter-section> -->
        <div v-for="question in carePlan" class="content-container swiper-slide">
          <div class="container">
            <div class="row">

              <div v-if="question.type === 'checkbox'" class="col-md-6 col-md-offset-3 content-wrapper form-group">
                <h3>{{ question.prompt }}</h3>
                <p>{{ question.description }}</p>
                <div v-for="option in question.options" class="checkbox">
                  <label>
                    <input type="checkbox" v-model="option.checked"> {{ option.text }}
                  </label>
                </div>
              </div>

              <div v-if="question.type === 'checkboxWithTextarea'" class="col-md-6 col-md-offset-3 content-wrapper form-group">
                <h3>{{ question.prompt }}</h3>
                <p>{{ question.description }}</p>
                <div v-for="option in question.options" class="checkbox">
                  <label>
                    <input type="checkbox" v-model="option.checked"> {{ option.text }}
                  </label>
                  <textarea v-if="option.checked" v-model="option.data" class="checkbox-input"></textarea>
                </div>
              </div>
            
              <div v-if="question.type === 'checkboxWithContent'" class="col-md-6 col-md-offset-3 content-wrapper form-group">
                <h3>{{ question.prompt }}</h3>
                <p>{{ question.description }}</p>
                <div v-for="option in question.options" class="checkbox">
                  <label>
                    <input type="checkbox" v-model="option.checked"> {{ option.text }}
                  </label>
                  <div v-if="option.checked" class="checkbox-input">{{ option.data }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-container swiper-slide end-slide">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 content-wrapper align-center">
                <h3>You're all set!</h3>
                <router-link :to="'/plan/view'" class="btn btn-primary btn-lg" role="button">View Plan</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-nav">
      <div class="swiper-button-prev swiper-button-white swiper-button-disabled"></div>
      <div class="status"> {{ currentSectionIndex }} / {{ surveyLength }}</div>
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
      surveyLength: carePlan.length + 2,
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
        direction: 'vertical',
        onlyExternal: true,
        keyboardControl: true,
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
<!-- I probably don't need to scope this, it's also a repeat of what is in learn -->
<style scoped> 
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


/*.textarea {
  width: 100%;
  min-height: 100px;
}*/

.checkbox-input {
  display: block;
  width: 100%;
  min-height: 80px;
  border: 1px solid #333333;
  margin: 10px 0;
}

.align-center {
  text-align: center;
}

</style>
