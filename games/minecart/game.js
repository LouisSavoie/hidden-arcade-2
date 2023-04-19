const gameDOM = document.querySelector('#game')
const game = () => {
  let gameHTML = /*html*/`
    <button id="mute-button" class="mc-button">Mute</button>

    <p id="title">Minecart</p>

    <div id="loot-display">
      <span id="loot-text"></span>
      <div id="block-img"></div>
      <div><span id="block-weight"></span><span id="block-weight-unit-display"></span></div>
    </div>

    <div id="minecart-display">
      <div id="mined-blocks-display"></div>
      <button id="minecart-button" class="minecart"></button>
      <strong><span id="current-weight-display">0</span><span>kg / <span id="max-weight-display">100</span>kg</span></strong>
    </div>

    <div id="score-container">
      <!-- OLD RESET BUTTON, REPLACED BY DUMPING MINECART <button id="reset-button">Reset</button> -->
      <strong><span>SCORE: <span id="score-display">0</span></span></strong>
    </div>

    <button id="pickaxe-button" class="pickaxe1"></button>

    <input type="text" id="initials" class="mc-input" placeholder="Initials, max: 4" maxlength="4">

    <p id="how-to-play">
      <strong>How to play:</strong> Enter your initials for highscores in the input above then click the pickaxe to mine. The goal is to fill up the minecart without overfilling it. Each ore has a score value based on it's rarity. If you win, your score will be added to the highscores below. Highscores are local to your browser. Click the Minecart to dump it out and start again.<br>
      <strong>Keyboard Controls:</strong> 'T' = Pickaxe, 'R' = Reset, 'M' = Toggle Sound
    </p>

    <h3>Local Highscores</h3>

    <div>
      <ol id="scores-display">
        No scores yet!
      </ol>
    </div>

    <button id="reset-scores-button" class="mc-button">Reset Scores</button>

    <h3 id="achievements-heading">Local Achievements</h3>

    <div id="achievements-display"></div>

    <button id="reset-achievements-button" class="mc-button">Reset Achievements</button>

    <div id="achievement-unlocked-display" class="hidden"></div>

    <section id="info">
      <h3>History</h3>
      <p>When I first starting learning JavaScript I build a few small games to get a feel for the language including a game called Minecart. It was actually the first game I made so I though it was fitting to remake it as the first one in this arcade.</p>
      <p>After poking around in my archived files I found the code for the original Minecart game. Here is <a href="/games/minecart-classic">Minecart Classic</a></p>
    </section>
  `
  return gameHTML
}
gameDOM.innerHTML = game()

// Game code here

// Buttons
const resetScoresButton = document.getElementById('reset-scores-button')
const resetAchievementsButton = document.getElementById('reset-achievements-button')
const pickaxeButton = document.getElementById('pickaxe-button')
const minecartButton = document.getElementById('minecart-button')
const muteButton = document.getElementById('mute-button')
// OLD RESET BUTTON, REPLACED BY DUMPING MINECART const resetButton = document.getElementById('reset-button')

// Displays
const lootText = document.getElementById('loot-text')
const blockImg = document.getElementById('block-img')
const blockWeight = document.getElementById('block-weight')
const blockWeightUnitDisplay = document.getElementById('block-weight-unit-display')
const minedBlocksDisplay = document.getElementById('mined-blocks-display')
const currentWeightDisplay = document.getElementById('current-weight-display')
const maxWeightDisplay = document.getElementById('max-weight-display')
const scoreDisplay = document.getElementById('score-display')
const scoresDisplay = document.getElementById('scores-display')
const achievementsDisplay = document.getElementById('achievements-display')
const achievementUnlockedDisplay = document.getElementById('achievement-unlocked-display')

// Inputs
const initialsInput = document.getElementById('initials')

// Data
const blocks = {
  stone: {
    name: 'stone',
    text: 'You got stone!',
    img: 'img/blocks/stone.png',
    weight: 20,
    score: 1
  },
  copper: {
    name: 'copper',
    text: 'You got copper!',
    img: 'img/blocks/copper.png',
    weight: 5,
    score: 5
  },
  tin: {
    name: 'tin',
    text: 'You got tin!',
    img: 'img/blocks/tin.png',
    weight: 3,
    score: 10
  },
  iron: {
    name: 'iron',
    text: 'You got iron!',
    img: 'img/blocks/iron.png',
    weight: 10,
    score: 20
  },
  silver: {
    name: 'silver',
    text: 'You got silver!',
    img: 'img/blocks/silver.png',
    weight: 2,
    score: 40
  },
  gold: {
    name: 'gold',
    text: 'You got gold!',
    img: 'img/blocks/gold.png',
    weight: 1,
    score: 100
  },
  diamond: {
    name: 'diamond',
    text: 'You got diamond!',
    img: 'img/blocks/diamond.png',
    weight: 0,
    score: 1000
  },
  win: {
    name: 'win',
    text: 'You WIN!',
    img: 'img/blocks/win.gif',
    weight: ''
  },
  lose: {
    name: 'lose',
    text: 'You LOSE!',
    img: 'img/blocks/lose.png',
    weight: ''
  },
  start: {
    name: 'start',
    text: 'Click the pickaxe to mine!',
    img: 'img/blocks/start.png',
    weight: 'Click the minecart to reset!'
  }
}
const achievements = {
  win: {
    name: 'Fireworks!',
    description: 'Win a game.',
    icon: 'img/achievements/win.png',
    unlocked: false
  },
  keepMining: {
    name: 'Till the wheels fall off',
    description: 'Mine 50 times after the game ends.',
    icon: 'img/achievements/keepMining.png',
    unlocked: false,
    minedAfter: 0
  },
  play100: {
    name: 'Veteran Miner',
    description: 'Play 100 games.',
    icon: 'img/achievements/play.png',
    unlocked: false,
    gamesPlayed: 0
  },
  score69: {
    name: 'Noice',
    description: 'Score 69.',
    icon: 'img/achievements/score69.png',
    unlocked: false
  },
  stone: {
    name: 'That\'s all you got?',
    description: 'Win with only stone.',
    icon: 'img/achievements/stone.png',
    unlocked: false
  },
  diamonds: {
    name: 'Diamonds!',
    description: 'Mine a diamond.',
    icon: 'img/achievements/diamond.png',
    unlocked: false
  },
  win100: {
    name: 'Dedication!',
    description: 'Win 100 games.',
    icon: 'img/achievements/win.png',
    unlocked: false,
    gamesWon: 0
  }
}
const maxWeight = 100
const weightUnit = 'kg'

// States
let minedBlocks = []
let currentWeight = 0
let score = 0
let scores = []
let pickActive = true
let currentAchievements = achievements
let mute = false

// On load
loadData()
setupDisplays()
currentAchievements.keepMining.minedAfter = 0

// Functions
function loadData() {
  if (storageData.games.minecart === undefined) {
    console.log('Local storage for Minecart not found')
    saveGame('minecart', { stats: { scores: [] }, achievements: achievements })
    console.log('New local storage for Minecart created')
  } else {
    console.log('Local storage for Minecart found')
    scores = storageData.games.minecart.stats.scores
    currentAchievements = storageData.games.minecart.achievements
    console.log('Local storage for Minecart loaded')
  }
}

function setupDisplays() {
  if (scores.length != 0) scoresDisplay.innerHTML = scores.map(v => v.element).join('')
  maxWeightDisplay.innerText = maxWeight
  updateAchievementsDisplay()
  updateLootDisplay(blocks.start)
}

function updateAchievementsDisplay() {
  achievementsDisplay.innerHTML = Object.values(currentAchievements).map(achievement => buildAchievement(achievement)).join('')
}

function buildAchievement(achievement) {
  if (achievement.unlocked) return `<div class="achievement"><img src="${achievement.icon}"><div class="achievement-text-container"><p>${achievement.name}</p><p class="achievement-desc">${achievement.description}</p></div></div>`
  return `<div class="achievement achievement-locked"><img src="${achievement.icon}"><div class="achievement-text-container"><p>${achievement.name}</p><p class="achievement-desc">Locked</p></div></div>`
}

// function addNewAchievements() {

// }

function runPickaxe() {
  pickaxeButton.classList = 'pickaxe1'
  if (!currentAchievements.keepMining.unlocked && !pickActive) runKeepMiningAchievement()
  if (!pickActive) return
  const block = mine()
  playSound('mine')
  updateLootDisplay(block)
  updateMinecart(block)
  updateScore(block)
  checkGameState()
  if (block.name === 'diamond' && !currentAchievements.diamonds.unlocked) runDiamondsAchievement()
}

function mine() {
  const random = Math.floor(Math.random() * 100) + 1
  if (random <= 30) {
    return blocks.stone
  } else if (random <= 50) {
    return blocks.copper
  } else if (random <= 70) {
    return blocks.tin
  } else if (random <= 85) {
    return blocks.iron
  } else if (random <= 95) {
    return blocks.silver
  } else {
    const diamondRandom = Math.floor(Math.random() * 100) + 1
    if (diamondRandom === 100) return blocks.diamond
    return blocks.gold
  }
}

function updateLootDisplay(block) {
  lootText.innerText = block.text
  blockImg.innerHTML = `<img id="block-${block.name}" src="${block.img}">`
  blockWeight.innerText = block.weight
  block.name === 'start' ? blockWeightUnitDisplay.innerText = '' : blockWeightUnitDisplay.innerText = weightUnit
}

function updateMinecart(block) {
  minedBlocks.push(`<img src="${block.img}" style="height: 25px; width: 25px;">`)
  minedBlocksDisplay.innerHTML = minedBlocks.join('')
  currentWeight += block.weight
  currentWeightDisplay.innerText = currentWeight
}

function updateScore(block) {
  score += block.score
  scoreDisplay.innerText = score
}

function checkGameState() {
  if (currentWeight === maxWeight) runWin()
  if (currentWeight > maxWeight) runLose()
  // for testing
  // score = 69
  // runWin()
  // runLose()
}

function runWin() {
  pickActive = false
  updateLootDisplay(blocks.win)
  blockWeightUnitDisplay.innerText = 'PERFECTLY LOADED!'
  saveScore()
  playSound('win')
  if (!currentAchievements.win.unlocked) runWinAchievement()
  if (!currentAchievements.win100.unlocked) runWin100Achievement()
  if (!currentAchievements.play100.unlocked) runPlay100Achievement()
  if (!currentAchievements.score69.unlocked) runScore69Achievement()
  if (!currentAchievements.stone.unlocked) runStoneAchievement()
}

function runLose() {
  pickActive = false
  updateLootDisplay(blocks.lose)
  blockWeightUnitDisplay.innerText = 'OVERLOADED!'
  if (!currentAchievements.play100.unlocked) runPlay100Achievement()
}

function saveScore() {
  scores.push({ score: score, element: `<li>${initialsInput.value.toUpperCase()}: ${score}</li>` })
  scores.sort((a, b) => b.score - a.score)
  saveGame('minecart', { stats: { scores: scores }, achievements: currentAchievements })
  scoresDisplay.innerHTML = scores.map(v => v.element).join('')
}

function updateAchievements() {
  saveGame('minecart', { stats: { scores: scores }, achievements: currentAchievements })
  updateAchievementsDisplay()
}

function resetGame() {
  minecartButton.classList = 'minecart'
  score = 0
  scoreDisplay.innerText = score
  currentWeight = 0
  currentWeightDisplay.innerText = currentWeight
  blockWeightUnitDisplay.innerText = weightUnit
  minedBlocks = []
  minedBlocksDisplay.innerHTML = minedBlocks.join('')
  updateLootDisplay(blocks.start)
  pickActive = true
  currentAchievements.keepMining.minedAfter = 0
  playSound('resetGame')
}

function resetScores() {
  scores = []
  saveGame('minecart', { stats: { scores: scores }, achievements: currentAchievements })
  scoresDisplay.innerHTML = 'No scores yet!'
}

function resetAchievements() {
  currentAchievements = achievements
  saveGame('minecart', { stats: { scores: scores }, achievements: currentAchievements })
  updateAchievementsDisplay()
}

function displayAchievement(achievement) {
  achievementUnlockedDisplay.innerHTML = `<h3>Achievement Unlocked!</h3><span>&times;</span><div class="achievement"><img src="${achievement.icon}"><div class="achievement-text-container"><p>${achievement.name}</p><p class="achievement-desc">${achievement.description}</p></div></div>`
  achievementUnlockedDisplay.classList = ''
  playSound('achievement')
}

function playSound(sound) {
  if (mute) return
  const sfx = new Audio(`sfx/${sound}.mp3`)
  sfx.play()
}

function toggleMute() {
  if (mute === false) {
    mute = true
    muteButton.innerText = 'Unmute'
  } else {
    mute = false
    muteButton.innerText = 'Mute'
  }
}

// Achievement Functions
function runWinAchievement() {
  currentAchievements.win.unlocked = true
  displayAchievement(achievements.win)
  updateAchievements()
}

function runWin100Achievement() {
  currentAchievements.win100.gamesWon += 1
  if (currentAchievements.win100.gamesWon === 100) {
    currentAchievements.win100.unlocked = true
    displayAchievement(achievements.win100)
  }
  updateAchievements()
}

function runPlay100Achievement() {
  currentAchievements.play100.gamesPlayed += 1
  if (currentAchievements.play100.gamesPlayed === 100) {
    currentAchievements.play100.unlocked = true
    displayAchievement(achievements.play100)
  }
  updateAchievements()
}

function runKeepMiningAchievement() {
  currentAchievements.keepMining.minedAfter += 1
  if (currentAchievements.keepMining.minedAfter === 50) {
    currentAchievements.keepMining.unlocked = true
    displayAchievement(achievements.keepMining)
    updateAchievements()
  }
}

function runScore69Achievement() {
  if (score === 69) {
    currentAchievements.score69.unlocked = true
    displayAchievement(achievements.score69)
    updateAchievements()
  }
}

function runStoneAchievement() {
  if (score === 5) {
    currentAchievements.stone.unlocked = true
    displayAchievement(achievements.stone)
    updateAchievements()
  }
}

function runDiamondsAchievement() {
  currentAchievements.diamonds.unlocked = true
  displayAchievement(achievements.diamonds)
  updateAchievements()
}

// Event Listeners
pickaxeButton.addEventListener('mousedown', () => {
  pickaxeButton.classList = 'pickaxe2'
})

pickaxeButton.addEventListener('touchstart', () => {
  pickaxeButton.classList = 'pickaxe2'
})

pickaxeButton.addEventListener('mouseup', () => {
  runPickaxe()
})

minecartButton.addEventListener('mousedown', () => {
  if (score !== 0) minecartButton.classList = 'minecart-dump'
})

minecartButton.addEventListener('touchstart', () => {
  if (score !== 0) minecartButton.classList = 'minecart-dump'
})

minecartButton.addEventListener('mouseup', () => {
  if (score !== 0) resetGame()
})

resetScoresButton.addEventListener('click', () => {
  resetScores()
})

resetAchievementsButton.addEventListener('click', () => {
  resetAchievements()
})

achievementUnlockedDisplay.addEventListener('click', () => {
  achievementUnlockedDisplay.classList = 'hidden'
})

muteButton.addEventListener('click', () => {
  toggleMute()
})

document.addEventListener('keydown', (event) => {
  if (event.target.localName === 'input') return
  if (event.key === 't') pickaxeButton.classList = 'pickaxe2'
  if (event.key === 'r' && score !== 0) minecartButton.classList = 'minecart-dump'
})

document.addEventListener('keyup', (event) => {
  if (event.target.localName === 'input') return
  if (event.key === 't') {
    runPickaxe()
  }
  if (event.key === 'r' && score !== 0) resetGame()
  if (event.key === 'm') toggleMute()
})
