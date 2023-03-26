const modalsDOM = document.querySelector('#modals')
const modals = () => {
  return /*html*/`
    <div id="feedback-modal" class="modal background hidden">
    <div class="modal-content surface primary-text">
        <form action="https://formsubmit.co/75c08e43238bf34e28f52065f44fe959" method="post">
            <label for="name">Name:</label><br>
            <input type="text" name="name"><br>
            <label for="email">E-mail:</label><br>
            <input type="email" name="email"><br>
            <label for="feedback">*Feedback:</label><br>
            <textarea name="feedback" rows="5" cols="50" required></textarea><br>
            <span>If giving feedback on a specific game, please mention it.</span><br>
            <input type="hidden" name="_subject" value="HiddenArcade feedback">
            <input type="hidden" name="_autoresponse" value="Thank you for your feedback on HiddenArcade, I will read it ASAP! -Louis, Creator of HiddenArcade.net">
            <input type="hidden" name="_template" value="table">
            <button type="submit" class="mt-h secondary-button">Send</button>
            <button type="reset" class="mt-h secondary-button">Reset</button>
            <button id="close-feedback-modal-button" class="mt-h secondary-button">Close</button>
        </form>
      </div>
    </div>
  `
}
modalsDOM.innerHTML = modals()

// Feedback Modal
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
