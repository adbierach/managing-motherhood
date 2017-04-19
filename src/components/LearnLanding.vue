<template>
  <div class="">
    <site-header></site-header>
    <div class="jumbotron">
      <h1>Learn</h1>
      <p>Learn modules here :)</p>
      <router-link :to="'/learn/1'" class="btn btn-primary btn-lg" role="button">Get Started</router-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 list-group">
          <router-link class="list-group-item" v-for="chapter in chapters" :to="{path: '/learn/'+chapter.id}">
            {{ chapter.title }}
          </router-link>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
  
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'learnlanding',
  data () {
    return {
      chapters: [
      {title: 'Being Pregnant', id: '1'},
      {title: 'Life with Baby', id: '2'},
      {title: 'Coping with Stress', id: '3'}
      ]
    }
  },
  components: {'site-header': Header, 'site-footer': Footer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
