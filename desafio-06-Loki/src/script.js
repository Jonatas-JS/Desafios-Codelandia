let modal = document.querySelector('.modal')
let closeTrailer = document.querySelector('.close-trailer')
let activeTrailer = document.querySelector('#buttonTrailer')
function modalActive() {
  modal.classList.add('visible')
}
function modalClose() {
  location.reload()
}
activeTrailer.addEventListener('click', modalActive)
closeTrailer.addEventListener('click', modalClose)
