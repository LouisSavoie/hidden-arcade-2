const navDOM = document.querySelector('nav')
const nav = () => {
    return /*html*/`
      <!-- <a class="secondary-text upper-hover" href="https://www.hiddenutils.net" target="_blank">HiddenUtils</a> -->
      <!-- <a class="secondary-text upper-hover" href="/" target="_blank">Donate</a> -->
      <!-- <a class="secondary-text upper-hover" href="/" target="_blank">Patreon</a> -->
      <!-- <a class="secondary-text upper-hover" href="/" target="_blank">YouTube</a> -->
      <a class="secondary-text upper-hover" href="https://github.com/LouisSavoie/hidden-arcade" target="_blank">GitHub</a>
      <!-- <a class="secondary-text upper-hover" id="newsletter-nav-link" href="javascript:void(0)">Newsletter</a> -->
      <a class="secondary-text upper-hover" id="feedback-nav-link" href="javascript:void(0)">Feedback</a>
      <button id="data-reset-button" type="button" class="secondary-button">Reset Data</button>
    `
}
navDOM.innerHTML = nav()

// Data Reset Button
const dataResetButton = document.querySelector('#data-reset-button')

dataResetButton.addEventListener('click', function() {
  saveTemplate()
})
