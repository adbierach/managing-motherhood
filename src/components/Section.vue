<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 content-wrapper" v-html="compiledMarkdown">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import marked from 'marked'

export default {
  name: 'section',
  props: ['content'],
  data () {
    return {
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-wrapper {
    height: 100%;
    overflow-y: auto;
  }

  .container, .row {
    height: 100%;
  }
</style>
