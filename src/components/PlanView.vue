<template>
  <div>
    <site-header></site-header>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 content-wrapper">
          <h1>My Care Plan</h1>
          <p>If you would like your care plan sent to you, enter your email here:</p>
          <div class="send-email-wrapper input-group">
            <input type="email" class="form-control" placeholder="Email address" v-model="userEmail">
            <button class="btn btn-primary btn-lg" v-on:click="sendEmail">SEND</button>
            <div v-if="emailSuccessfullySent">Your care plan has been sent!</div>
            <div v-if="inValidEmail">Oops, looks like that isn't a valid email address</div>
          </div>
          <div v-for="question in newCarePlan" class="block">
            <h3>{{ question.prompt }}</h3>
            <ul>
              <li v-for="option in question.options" class="plan-option">
                {{ option.text }}
                <div v-if="option.data" class="details">
                  {{ option.data }}
                </div>
              <li>
            </ul>
          </div>

          <div>
            <h3>Tips for loved ones:</h3>
            <p>What loved ones should know about supporting you as a new mother:</p>
            <ul>
              <li>Their support makes a big difference – for you, the baby, and the entire family</li>
              <li>If a mother is feeling depressed or anxious, it will not just go away by itself – support and help is needed, and they play an important role in that process</li>
              <li>With the right help and support, mothers who are struggling will get better, and the overwhelm of parenting will lessen.</li>
              <li>The sooner you get the support and help you need as a new mother, the sooner you will start to feel better and adjust to parenting</li>
            </ul>
            
            <h3>Emergency Helpline</h3>
            <p>PSI Warmline - <a href="tel:18009444773">1.800.944.4773</a></p>
            <p>Postpartum Support International has as warmline. You can always call, leave a message, and a support volunteer will call you back. Spanish speaking available.</p>
          </div>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

import carePlan from '../services/plan'
import utils from '../services/utils'

export default {
  name: 'planview',
  data () {
    return {
      carePlan: carePlan,
      userEmail: '',
      emailSuccessfullySent: false,
      inValidEmail: false
    }
  },
  computed: {
    newCarePlan: function () {
      let newPlan = this.carePlan.map((item) => {
        return {
          type: item.type,
          prompt: item.prompt,
          description: item.description,
          // filter for checked items
          options: item.options.filter((option) => {
            return option.checked
          })
        }
      })

      return newPlan
    }
  },
  created () {
    console.log(this.carePlan)
  },
  updated () {
  },
  destroyed () {
  },
  watch: {
    '$route': 'fetchData'
  },
  components: {'site-header': Header, 'site-footer': Footer},
  methods: {
    sendEmail () {
      let email = this.userEmail

      if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.inValidEmail = true
        return
      } else {
        this.inValidEmail = false
      }

      let newPlan = this.carePlan.map((item) => {
        return {
          type: item.type,
          prompt: item.prompt,
          description: item.description,
          // filter for checked items
          options: item.options.filter((option) => {
            return option.checked
          })
        }
      })
      newPlan = JSON.stringify(newPlan)

      utils.sendEmail(email, newPlan)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.emailSuccessfullySent = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- I probably don't need to scope this, it's also a repeat of what is in learn -->
<style scoped> 

  .container {
    min-height: 100%;
    height: initial;
  }
  .block li:last-child {
    display: none;
  }
  .send-email-wrapper .btn {
    margin: 10px 0;
  }

</style>
