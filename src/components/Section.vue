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

  .content-wrapper img {
    width: 95%;
    max-width: 500px;
    margin: 25px auto;
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

  .content-wrapper h4 {
    border-bottom: 2px solid;
    font-size: 22px;
    padding-bottom: 15px;
  }

  .content-wrapper p {
    font-size: 17px;
    line-height: 24px;
    margin: 20px 0;
  }

  .content-wrapper ul {
    margin-top: 30px;
    margin-left: 0px;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 20px;
    padding-left: 30px;
  }

  .content-wrapper li {
    list-style-type: disc;
    font-size: 17px;
    color: #686868;
    margin: 16px 0;
  }

  h4 {
    font-style: italic;
  } 

</style>
