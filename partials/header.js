const headerDOM = document.querySelector('header')
const h2data = document.querySelector('#h2-data')
const header = () => {
    return /*html*/`
    <a href="/"><h1 class="primary-text upper-hover">HiddenArcade</h1></a>
    <h2 class="secondary-text">${h2data.innerHTML}</h2>
    `
}
headerDOM.innerHTML = header()
