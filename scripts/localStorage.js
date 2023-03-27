// This script should be run on every page to ensure compatibility with current data schemes for local storage user and game specific data

// Data
const template = {
  user: {
    name: ''
  },
  games: {

  }
}
let fromStorage = {}

// Functions
function checkLocalStorage() {
  // Check the browser for local storage, if it's not there save the template data, else run updates to ensure compatibility
  if (localStorage.getItem('hiddenArcade') === null) {
    console.log('No local storage found, new data from template will be saved')
    save(template)
  } else {
    fromStorage = JSON.parse(localStorage.getItem('hiddenArcade'))
    console.log('Local storage found, updating if needed')
    updateLocalStorage()
  }
}

function updateLocalStorage() {
  // Add transformations to fromStorage data here to update user's previous data to match new template versions and prevent errors
  // Transformations should be line by line in order of version changes
  // Template change, if (fromStorage.foo === undefined) { fromStorage.foo = {} }
  console.log('Updates run on data')
  // Then save changes back to their storage
  save(fromStorage)
}

// Helpers
function save(data) {
  localStorage.hiddenArcade = JSON.stringify(data)
  console.log('Data saved to local storage')
}

// On Load
checkLocalStorage()
