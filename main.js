//Abre e fecha o menu quando clicar nos icones
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //adiciona ou remove a classe show
  })
}

//Quando clicar em um icone do menu, fechar o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//aplicar box-shadow no menu quando der scroll na página
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})
