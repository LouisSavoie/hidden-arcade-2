// This script should be run on every page to ensure compatibility with current data schemes for local storage user and game specific data

// Data
const storageDataTemplate = {
  user: {
    name: ''
  },
  games: {

  }
}
/* Games template:
games: {
  name: {
    stats: {
      key: value,
      scores: [], for example
    },
    achievements: {}
  }
} */
let storageData = {}

// Functions
function getLocalStorage() {
  // Check the browser for local storage, if it's not there save the template data, else run updates to ensure compatibility
  if (localStorage.getItem('hiddenArcade') === null) {
    saveTemplate()
  } else {
    storageData = JSON.parse(localStorage.getItem('hiddenArcade'))
    console.log('Local storage found, updating if needed')
    updateLocalStorage()
  }
}

function updateLocalStorage() {
  // Add transformations to data here to update user's previous data to match new template versions and prevent errors
  // Transformations should be line by line in order of version changes
  // Template change, if (storageData.foo === undefined) { storageData.foo = {} }
  // Then save changes back to users local storage
  saveSite()
}

// Save Functions
function saveTemplate() {
  localStorage.hiddenArcade = JSON.stringify(storageDataTemplate)
  console.log('New data from template saved to local storage')
}

function saveSite() {
  localStorage.hiddenArcade = JSON.stringify(storageData)
  console.log('Site data saved to local storage')
}

function saveGame(game, data) {
  storageData.games[game] = data
  localStorage.hiddenArcade = JSON.stringify(storageData)
  console.log(`${game} data saved to local storage`)
}

// On Load
getLocalStorage()

// Games must load data into their state variables with their own loadData() function
