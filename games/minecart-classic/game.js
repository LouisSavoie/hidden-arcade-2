const gameDOM = document.querySelector('#game')
const game = () => {
  let gameHTML = /*html*/`
    <p id="title">MINECART</p>

    <div class="scoreboard">
        <p class="badge" id="score-badge">SCORE</p>
        <p class="badge" id="highscore-badge">Best: 0000 lb</p>
        <p id="score">0 lb</p>
        
    </div>
    <div class="result">
        <img id="result-img" src="img/starting.png" alt="">
        <p id="result-text">Good luck!</p>
    </div>
    <div class="buttons">
        <div id="cart-button">
            <img id="cart-img" src="img/cart.png" alt="">
        </div>
        <div id="dig-button">
            <img id="dig-img" src="img/pickaxe.png" alt="">
        </div>
    </div>
    <div class="fun-messege">
        <p>The Minecart holds 5,000 lb. Fill it to exactly 5,000 lb to win!</p>
        <p>OR get as close as you dare and dump it to start over and save your score as a new Best.</p>
    </div>
  `
  return gameHTML
}
gameDOM.innerHTML = game()

// Game code here
let score = 0;
let highscore = 0;
const capacity = 5000;
var state = "play";
const score_dom = document.getElementById("score");
const highscore_dom = document.getElementById("highscore-badge");
const resultText_dom = document.getElementById("result-text");
const resultImg_dom = document.getElementById("result-img");
const dig_dom = document.getElementById("dig-button");
const cart_dom = document.getElementById("cart-button");
const cartImg_dom = document.getElementById("cart-img");

function reset() {
    if (state != "fail" && score > highscore) {
        highscore = score;
        highscore_dom.innerHTML = "Best: " + highscore + " lb";
    }
    setTimeout(function() {cartImg_dom.src = "img/cart.png";}, 1000);
    score = 0;
    score_dom.innerHTML = score + " lb";
    resultImg_dom.src = "img/starting.png";
    resultText_dom.innerHTML = "Good Luck";
    state = "play";
}

function drawBlock() {
    const blocks = ['stone',
        'gravel',
        'coal',
        'iron',
        'gold',
        'pixelisium',
        'diamond'];
    const randomNumber = Math.floor(Math.random() * 7);
    //console.log(randomNumber);
    return blocks[randomNumber];
}

function stateCheck() {
    if (score > capacity) {
        score_dom.innerHTML = "YOU LOSE!";
        resultImg_dom.src = "img/fail.png";
        resultText_dom.innerHTML = "The Minecart is TOO HEAVY!";
        state = "fail";
    }
    if (score === capacity) {
        score_dom.innerHTML = "YOU WIN!";
        resultImg_dom.src = "img/win.gif";
        resultImg_dom.height = "100";
        resultText_dom.innerHTML = "Congratulations!";
        state = "win";
    }
}

function loadStone() {
    score += 1000;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 1000 lb of Stone!";
    resultImg_dom.src = "img/stone.png";
    stateCheck();
}

function loadGravel() {
    score += 500;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 500 lb of Gravel!";
    resultImg_dom.src = "img/gravel.png";
    stateCheck();
}

function loadCoal() {
    score += 100;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 100 lb of Coal!";
    resultImg_dom.src = "img/coal.png";
    stateCheck();
}

function loadIron() {
    score += 50;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 50 lb of Iron!";
    resultImg_dom.src = "img/iron.png";
    stateCheck();
}

function loadGold() {
    score += 10;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 10 lb of Gold!";
    resultImg_dom.src = "img/gold.png";
    stateCheck();
}

function loadPixelisium() {
    score += 5;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 5 lb of Pixelisium!";
    resultImg_dom.src = "img/pixelisium.png";
    stateCheck();
}

function loadDiamond() {
    score += 1;
    score_dom.innerHTML = score + " lb";
    resultText_dom.innerHTML = "You got 1 lb of Diamond!";
    resultImg_dom.src = "img/diamond.png";
    stateCheck();
}

function dig() {
    const outcome = drawBlock();
    switch (outcome) {
        case 'stone':
            loadStone();
            break;
        case 'gravel':
            loadGravel();
            break;
        case 'coal':
            loadCoal();
            break;
        case 'iron':
            loadIron();
            break;
        case 'gold':
            loadGold();
            break;
        case 'pixelisium':
            loadPixelisium();
            break;
        case 'diamond':
            loadDiamond();
            break;
    }
}

function main() {

    dig_dom.addEventListener('click', function () {
        if (state == "play") {
            dig();
        }
    })

    cart_dom.addEventListener('click', function () {
        cartImg_dom.src = "img/dump.png";
        reset();
    })

}

main()
