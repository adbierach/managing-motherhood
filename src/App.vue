<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route': 'resetScroll'
  },
  methods: {
    resetScroll () {
      window.scroll(0, 0)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #app, #app > div {
	height: 100%;
}

body {
	-webkit-overflow-scrolling: touch;
}

iframe {
  width: 100% !important;
  max-width: 560px;
  height: 330px;
}


#app .btn-primary {
	background-color: #CBCE00;
	border-color: #CBCE00;
	text-transform: uppercase;
	font-weight: bold;
}

</style>
