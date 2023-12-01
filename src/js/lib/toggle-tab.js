document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-text')
  const contents = document.querySelectorAll('.content')

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      navLinks.forEach((lnk) => lnk.classList.remove('active-link'))
      contents.forEach((cnt) => cnt.classList.remove('active-content'))

      const targetId = this.dataset.id

      document.querySelectorAll(`.nav-text[data-id="${targetId}"]`).forEach((sameLink) => {
        sameLink.classList.add('active-link')
      })

      const activeContent = document.getElementById(targetId)
      if (activeContent) {
        activeContent.classList.add('active-content')
      }
    })
  })

  document.querySelectorAll(`.nav-text[data-id="chairs"]`).forEach((link) => {
    link.classList.add('active-link')
  })
  document.getElementById('chairs').classList.add('active-content')
})
