let modal = document.querySelector('.modal')

function openButton() {
  modal.classList.add('visible')
}
function closeButton() {
  location.reload()
  // modal.classList.remove('visible')
  // como o vídeo é do YouTube se somente remover a class visible o vídeo pode continuar reproduvindo mesmo sem estar visível em tela
}
let trailerButton = document.querySelector('.play-trailer')
modal.addEventListener('click', closeButton)
trailerButton.addEventListener('click', openButton)