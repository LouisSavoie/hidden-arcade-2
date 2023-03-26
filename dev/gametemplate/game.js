const gameDOM = document.querySelector('#game')
const game = () => {
  let gameHTML = /*html*/`
    <!-- initial load html code here, update elements later as needed in other render functions -->
    <p>test</p>
  `
  return gameHTML
}
gameDOM.innerHTML = game()

// Game code here
