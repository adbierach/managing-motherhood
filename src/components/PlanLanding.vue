<template>
  <div class="">
    <site-header></site-header>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 content-wrapper">
          <h1>Care Plan</h1>
          <p>It’s helpful to have a plan in place to help when you are feeling overwhelmed, upset, depressed, anxious or just stressed.</p>
          <router-link :to="'/plan/build'" class="btn btn-primary btn-lg" role="button">Create Plan</router-link>
          <router-link v-if="carePlanExists" :to="'/plan/view'" class="btn btn-primary btn-lg" role="button">View Plan</router-link>
          <!-- <p v-if="carePlanExists" v-on:click="deletePlan">Delete Care Plan</p> -->
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
      carePlanExists: !!window.localStorage.getItem('plan')
    }
  },
  components: {'site-header': Header, 'site-footer': Footer},
  methods: {
    deletePlan: function (e) {
      window.localStorage.removeItem('plan')
      // doing this because the above is not watching localstorage
      // there is probably a better way to do this
      this.carePlanExists = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: calc(100% - 50px);
  padding-top: 50px;
}
</style>
