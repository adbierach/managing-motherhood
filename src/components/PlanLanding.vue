<template>
  <div class="">
    <site-header></site-header>
    <div class="jumbotron">
      <h1>Plan</h1>
      <p>Build or view your care plane here!</p>
      <router-link :to="'/plan/build'" class="btn btn-primary btn-lg" role="button">Get Started</router-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
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
    }
  },
  components: {'site-header': Header, 'site-footer': Footer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
