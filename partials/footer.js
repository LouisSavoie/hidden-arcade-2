const footerDOM = document.querySelector('footer')
const footer = () => {
    return /*html*/`
    <span>Copyright © 2022-2023 <a href="https://www.louissavoie.com" target="_blank" rel="noopener noreferrer" class="primary-text">Louis Savoie</a>. All rights reserved. Please don't steal my shit.</span>
    `
}
footerDOM.innerHTML = footer()