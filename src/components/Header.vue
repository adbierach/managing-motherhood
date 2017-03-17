<template>
<nav id="header" class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar-collapse">
      <ul class="nav navbar-nav">
        <li><router-link to="/learn">Learn</router-link></li>
        <li><router-link to="/practice">Practice</router-link></li>
        <li><router-link to="/plan">Plan</router-link></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>



</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>
#header {
  background-color: #372F2D;
  border: none;
  border-bottom: 2px solid #CBCE00;
  margin-bottom: 0;
}


.navbar-toggle {
  float: left;
  margin-left: 15px;

  background-color: #b2b500;
  border: none;
  border-radius: 3px;
}

.navbar-toggle:hover, .navbar-toggle:active, .navbar-toggle:focus {
  background-color: #b2b500 !important;
}

.navbar-default .navbar-collapse {
  border: none;
  color: white;
}

.icon-bar {
  background-color: white !important;
}

.linkclass:hover {
  background-color: #CBCE00;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5px;
  width: 130px;
}

h3 {
  color: white;
}

.navbar .nav li a {
  color: white;
  font-size: 20px;

}
.navbar .nav li a:hover, .navbar .nav li a:focus {
  color: white;
  font-weight: bold;
}

</style>
