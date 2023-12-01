const openButton = document.querySelector('.burger-menu')
const modal = document.querySelector('#modal-nav')
const closeButton = document.querySelector('#close-modal')

function toggleModal(isVisible) {
  modal.classList.toggle('is-visible', isVisible)
}

openButton.addEventListener('click', () => toggleModal(true))
closeButton.addEventListener('click', () => toggleModal(false))
