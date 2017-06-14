// This is the full, empty plan
import emptyPlan from './plan.json'

// Get plan from local storage
let localPlan = JSON.parse(window.localStorage.getItem('plan'))

// If plan exists in local storage, export it, otherwise send
// the empty plan
let plan = localPlan || emptyPlan

export default plan
