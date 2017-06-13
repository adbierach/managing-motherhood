// This is the full, empty plan
import planJSON from './plan.json'

const emptyPlan = planJSON

// Get plan from local storage
// let localPlan = JSON.parse(window.localStorage.getItem('plan'))

// If plan exists in local storage, export it, otherwise send
// the empty plan
let plan = emptyPlan // localPlan || emptyPlan

export default plan
