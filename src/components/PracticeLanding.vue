<template>
  <div class="">
    <site-header></site-header>
    <div class="jumbotron">
      <h1>Practice</h1>
      <p>Practice modules here :)</p>
      <router-link :to="'/learn/4'" class="btn btn-primary btn-lg" role="button">Get Started</router-link>
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
  name: 'planlanding',
  data () {
    return {
      chapters: [
      {title: 'Managing Stress', id: '4'},
      {title: 'Getting Sleep', id: '5'},
      {title: 'Knowing When to Get Help', id: '6'},
      {title: 'How Can Your Loved Ones Help?', id: '7'},
      {title: 'Review', id: '8'}
      ]
    }
  },
  components: {'site-header': Header, 'site-footer': Footer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
