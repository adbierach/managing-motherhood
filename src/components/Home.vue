<template>
  <div>
    <site-header></site-header>
    <div class="container-fluid">
      <div class="row hero-bg">
        <div class="col-sm-12 col-md-4 col-md-offset-4">
          <h1>Managing Motherhood</h1>
          <p>Welcome! This program is designed to help families feel more prepared to manage the emotional adjustments of pregnancy and parenting.</p>
        </div>
      </div>
      <div class="row nav-buttons-wrapper">
        <section class="col-xs-12">
          <router-link to="/learn" class="btn btn-primary btn-lg">Learn</router-link>
        </section>
        <section class="col-xs-12">
          <router-link to="/practice" class="btn btn-primary btn-lg">Practice</router-link>
        </section>
        <section class="col-xs-12">
          <router-link to="/plan" class="btn btn-primary btn-lg">Plan</router-link>
        </section>
      </div>
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

.hero-bg {
  background: url(../assets/slide01.jpg);
  background-position: center;
  background-size: cover;
  min-height: 300px;
  color: white !important;
}

.nav-buttons-wrapper {
  padding: 50px 0;
}

section {
  padding: 3% 0;
  text-align: center;
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
