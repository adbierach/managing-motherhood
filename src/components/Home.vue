<template>
  <div>
    <site-header></site-header>
    <div class="container-fluid">
      <div class="row hero-bg">
        <div class="scrim"></div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Welcome to Bringing Light to Motherhood!</h1>
          <p>This tool has been designed to help you (and your family) feel more prepared to adjust to the demands joys and stressors of pregnancy and parenting.</p>
          <router-link :to="'/learn/1'" class="btn btn-primary btn-lg" role="button">Get Started</router-link>
        </div>
      </div>
      <div class="row nav-buttons-wrapper">
        <section class="col-xs-12">
          <h1>Build your Care Plan</h1>
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
  position: relative;
}
.hero-bg h1 {
  font-size: 30px;
  margin-top: 50px;
}
.hero-bg p {
  color: white;
  font-size: 20px;
}

.scrim {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
}

.nav-buttons-wrapper {
  padding: 50px 0;
}

.list-group {
  margin-top: 50px;
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
