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
      <!-- If we're on a learn page, display chapter title in header -->
      <div v-if="title" class="title">{{ title }}</div>
      <router-link v-else to="/"><img class="logo" src="../assets/logo.png"></router-link>

    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar-collapse">
      <ul class="nav navbar-nav">
        <!-- <li v-if="title"><router-link to="/"><img class="logo-title" src="../assets/logo.png"></router-link></li> -->
        <li><router-link to="/" class="nav-item">Home</router-link></li>
        <li><router-link to="/" class="nav-item">Learn</router-link></li>
          <li><ul class="subnav">
            <li v-for="chapter in chapters"><router-link class="subnav-item" :to="{path: '/learn/'+chapter.id}">
              {{ chapter.title }}
              </router-link>
            </li>
          </ul>
        <li><router-link to="/plan" class="nav-item">Plan</router-link></li>
      </ul></li>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>



</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        chapters: [
        {title: 'Introduction', id: '0'},
        {title: 'Being Pregnant', id: '1'},
        {title: 'Life with Baby', id: '2'},
        {title: 'Coping with Stress', id: '3'},
        {title: 'Managing Stress', id: '4'},
        {title: 'Getting Sleep', id: '5'},
        {title: 'Knowing When to Get Help', id: '6'},
        {title: 'How Can Your Loved Ones Help?', id: '7'},
        {title: 'Review', id: '8'}
        ]
      }
    }
  }
</script>

<style scoped>

.subnav {
  margin-left: 30px;
}

.subnav-item, .subnav-item:hover {
  text-decoration: none;
}

.nav-item {
  text-transform: uppercase;
}

/*make navbar always collapsed*/

    .navbar-header {
        float: none;
    }
    .navbar-toggle {
        display: block;
    }
    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .navbar-collapse.collapse {
        display: none!important;
    }

    .navbar-collapse.collapse.in{
    display: block!important;
}
    .navbar-nav {
        float: none!important;
        margin: 7.5px -15px;
    }
    .navbar-nav>li {
        float: none;
    }
    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
    }
/*-----------------*/


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

.logo-title {

}

h3 {
  color: white;
}

.navbar .nav li a {
  color: white;
  font-size: 20px;

}
.navbar .nav li a:hover,
.navbar .nav li a:focus {
  color: white;
  font-weight: bold;
}

.navbar-default .navbar-nav>.open>a,
.navbar-default .navbar-nav>.open>a:focus,
.navbar-default .navbar-nav>.open>a:hover {
  background-color: #372F2D;
}

.dropdown-menu {
  background-color: #372F2D;
  min-width: 320px;
}

.list-group-item {
  background-color: #372F2D;
}

.title {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 20px;
  text-align: center;
  width: 286px;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 17px;
    top: 13px;
  }
}

</style>
