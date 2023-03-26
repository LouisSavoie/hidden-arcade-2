const appIndex = [
  { name: 'Test Game', fileName: 'test', date: '12.3.2023', tags: 'test tags new' },
  { name: 'Test Game 2', fileName: 'test2', date: '12.3.2023', tags: 'test new' },
  { name: 'Test Game 3', fileName: 'test3', date: '12.3.2023', tags: 'test fancy' },
  { name: 'Test Game 4', fileName: 'test4', date: '12.3.2024', tags: 'test fancy' },
  { name: 'Test Game 5', fileName: 'test5', date: '12.3.2025', tags: 'test fancy old' },
  { name: 'Test Game 6', fileName: 'test6', date: '12.3.2025', tags: 'test old long rpg magic tanks idle voxel' }
]

// App object template: { name: '', date: '', tags: '' }

const appCardsDOM = document.querySelector('#app-cards')
const appCards = () => {
  let appCardsHTML = ''
  appIndex.forEach(app => {
    appCardsHTML += /*html*/`
    <li class="app-cards-item">
      <a href="/games/${app.fileName}/" class="app-card highlight-hover">
        <img class="app-card-img" src="img/${app.fileName}.png" alt="${app.name}">
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
