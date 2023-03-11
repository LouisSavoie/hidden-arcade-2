const headerDOM = document.querySelector('header')
const header = () => {
    return /*html*/`
    <a href="/"><h1 class="primary-text">HiddenArcade</h1></a>
    <nav>
        <!-- <a class="secondary-text" href="https://www.hiddenutils.net" target="_blank">HiddenUtils</a> -->
        <!-- <a class="secondary-text" href="/" target="_blank">Donate</a> -->
        <!-- <a class="secondary-text" href="/" target="_blank">Patreon</a> -->
        <!-- <a class="secondary-text" href="/" target="_blank">YouTube</a> -->
        <a class="secondary-text" href="https://github.com/LouisSavoie/hidden-arcade" target="_blank">GitHub</a>
        <!-- <a class="secondary-text" id="newsletter-nav-link" href="javascript:void(0)">Newsletter</a> -->
        <a class="secondary-text" id="feedback-nav-link" href="javascript:void(0)">Feedback</a>
    </nav>
    <div id="feedback-modal" class="modal background hidden">
        <div class="modal-content surface primary-text">
            <form action="https://formsubmit.co/75c08e43238bf34e28f52065f44fe959" method="post">
                <label for="name">Name:</label><br>
                <input type="text" name="name" class="surface"><br>
                <label for="email">E-mail:</label><br>
                <input type="email" name="email" class="surface"><br>
                <label for="feedback">*Feedback:</label><br>
                <textarea name="feedback" rows="5" cols="50" required class="surface"></textarea><br>
                <span>If giving feedback on a specific game, please mention it.</span><br>
                <input type="hidden" name="_subject" value="HiddenArcade feedback">
                <input type="hidden" name="_autoresponse" value="Thank you for your feedback on HiddenArcade, I will read it ASAP! -Louis, Creator of HiddenArcade.net">
                <input type="hidden" name="_template" value="table">
                <button type="submit" class="modal-button surface secondary-text secondary-border">Send</button>
                <button type="reset" class="modal-button surface secondary-text secondary-border">Reset</button>
                <button id="close-feedback-modal-button" class="modal-button surface secondary-text secondary-border">Close</button>
            </form>
        </div>
    </div>
    `
}
headerDOM.innerHTML = header()

// Modal
const feedbackModal = document.getElementById('feedback-modal')
const feedbackNavLink = document.getElementById('feedback-nav-link')
const closeFeedbackModalButton = document.getElementById('close-feedback-modal-button')

// When the user clicks the button, open the modal
feedbackNavLink.onclick = function() {
  feedbackModal.classList.remove('hidden')
}

// When the user clicks close button, close the modal
closeFeedbackModalButton.onclick = function() {
  feedbackModal.classList.add('hidden')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == feedbackModal) {
    feedbackModal.classList.add('hidden')
  }
}