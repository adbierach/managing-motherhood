// This is the full, empty plan
const emptyPlan = [
{type: 'textarea', prompt: 'Who can I call for immediate support?', placeholder: 'Enter names and phone numbers here', data: ''},
{type: 'checkbox', prompt: 'Who can I call for immediate support?', placeholder: 'Enter names and phone numbers here', options: [{text: 'option 1', checked: false, data: ''}, {text: 'option 2', checked: false, data: ''}]}
]

// Get plan from local storage
let localPlan = JSON.parse(window.localStorage.getItem('plan'))

// If plan exists in local storage, export it, otherwise send
// the empty plan
let plan = localPlan || emptyPlan

export default plan
