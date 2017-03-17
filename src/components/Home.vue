<template>
  <div>
    <site-header></site-header>
    <div class="jumbotron">
      <h1>Managing Motherhood</h1>
      <p>Welcome! This program is designed to help families feel more prepared to manage the emotional adjustments of pregnancy and parenting.</p>
    </div>
    <div>
      <section>
        <router-link to="/learn" class="btn btn-primary btn-lg">Learn</router-link>
      </section>
      <section>
        <router-link to="/practice" class="btn btn-primary btn-lg">Practice</router-link>
      </section>
      <section>
        <router-link to="/plan" class="btn btn-primary btn-lg">Plan</router-link>
      </section>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {'site-header': Header, 'site-footer': Footer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


section {
  padding: 1% 10%;
}

section .btn {
  width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
}
h2 {
  margin-bottom: 15px;
  font-size: 35px;
}

</style>
