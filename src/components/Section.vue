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
    width: 100%;
    margin: 25px auto;
  }

  .content-wrapper .intro-icon {
    width: 125px;
    display: block;
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
    margin-bottom: 20px;
    text-align: center;
  }

  .content-wrapper h1 {
    text-align: center;
  }
  .content-wrapper hr {
    border-top: 2px solid;
    width: 80px;
    margin-top: 40px;
    margin-bottom: 40px;
  }


  .content-wrapper h4 {
    border-bottom: 2px solid;
    font-size: 22px;
    padding-bottom: 15px;
  }

  .content-wrapper p, strong {
    font-size: 17px;
    line-height: 24px;
    margin: 20px 0;
    color: #686868;
  }

  .content-wrapper ul {
    margin-left: 0px;
    padding: 0px;
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

  .chapter-overview {
    background-color:  #a9dde2;
    padding-bottom: 15px;
  }
  
  .chapter-overview-header {
    background-color: #58bdc9;
    position: relative;
    padding: 15px;
  }
  .content-wrapper .chapter-overview-icon {
    width: 40px;
    position: absolute;
    top: 9px;
    left: 15px;
    margin: 0;
  }

  .chapter-overview-header h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
    margin-left: 50px;
    font-weight: bold;
  }

  .chapter-overview .chapter-overview-body {
    padding: 15px;
    padding-left: 40px;
    padding-bottom: 0;
  }

  .reflect-wrapper {
    background-color:  #e3e496;
    padding-bottom: 15px;
  }
  
  .reflect-header {
    background-color: #c7c82e;
    position: relative;
    padding: 15px;
    margin-bottom: 20px;
  }
  .content-wrapper .reflect-icon {
    width: 40px;
    position: absolute;
    top: 9px;
    left: 15px;
    margin: 0;
  }

  .reflect-header h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
    margin-left: 50px;
    font-weight: bold;
  }

  .reflect-wrapper p {
    margin: 0;
    margin-left: 15px;
  }

  .reflect-wrapper .reflect-body {
    padding: 15px;
    padding-left: 40px;
    padding-bottom: 0;
  }

</style>
