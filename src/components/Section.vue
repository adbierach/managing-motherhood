<template>
  <div class="content-container">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-md-offset-3 content-wrapper" v-html="compiledMarkdown">
          
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
<style>
  .content-wrapper {
    padding: 3% 0 40px;
  }

  .content-container {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .container, .row {
    height: 100%;
  }
  .content-wrapper h3 {
    margin-bottom: 20px
  }

  .content-wrapper p {
    font-size: 18px;
    line-height: 22px;
    margin: 20px 0;
  }

  .content-wrapper ul {
    margin-top: 30px;
    margin-left: 20px;
  }

  .content-wrapper li {
    list-style-type: disc;
    font-size: 16px;
    color: #686868;
    margin: 8px 0;
  } 

</style>
