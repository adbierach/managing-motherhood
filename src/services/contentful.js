
import contentful from 'contentful'

const SPACE_ID = '8424r22246og'
const ACCESS_TOKEN = '1ef485ebb1d433de5cccf5c2a4cc2a45cf88aae28b482702f126b49394c56367'

let client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

export default client
