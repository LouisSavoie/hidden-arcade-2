const appIndex = [
  { name: 'Minecart', fileName: 'minecart', date: '5.27.2022', tags: 'minecart luck mining clicker achievements highscores' }
]

// App object template: { name: '', fileName: '', date: '', tags: '' }

const appCardsDOM = document.querySelector('#app-cards')
const appCards = () => {
  let appCardsHTML = ''
  appIndex.forEach(app => {
    appCardsHTML += /*html*/`
    <li class="app-cards-item">
      <a href="/games/${app.fileName}/" class="app-card highlight-hover">
        <img class="app-card-img" src="img/${app.fileName}.webp" alt="${app.name}">
        <div class="app-card-content">
          <h4 class="app-card-name primary-text">${app.name}</h4>
          <span class="secondary-text">Published: <span class="on-surface-text">${app.date}</span></span><br>
          <span class="secondary-text">Tags: <span class="on-surface-text">${app.tags}</span></span>
        </div>
      </a>
    </li>
    `
  })
  return appCardsHTML
}
appCardsDOM.innerHTML = appCards()

// Search Bar
function search() {
  const input = document.getElementById('search-bar').value.toLowerCase()
  const apps = document.getElementsByClassName('app-cards-item')

  for (i = 0; i < apps.length; i++) { 
    if (!apps[i].innerHTML.toLowerCase().includes(input)) {
        apps[i].style.display = 'none'
    }
    else {
        apps[i].style.display = 'flex'
    }
  } 
}
