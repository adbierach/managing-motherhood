import axios from 'axios'

let API = 'https://h15404ts7d.execute-api.us-east-1.amazonaws.com/prod'

const EMAIL_URL = `${API}/sendplan`

export default {

  sendEmail: (email, carePlan) => {
    return axios.post(EMAIL_URL, {
      email: email,
      careplan: carePlan
    }).catch((err) => {
      console.log('error, ', err)
    })
  }

}
