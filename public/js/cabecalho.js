const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) { //menu ativo
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    let cabecalho = document.querySelector('#header');
    cabecalho.classList.toggle('rolagem')
  } else { //menu NÃO ativo
    let cabecalho = document.querySelector('#header');
    cabecalho.classList.toggle('rolagem', active)
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



window.addEventListener("scroll", function(){
  let cabecalho = document.querySelector('#header');
  cabecalho.classList.toggle('rolagem', window.scrollY > 0)
});

  // MENU ATIVO -------------------------------

const menuItem = document.querySelectorAll('.item-menu')
  function ativarLink(){
    menuItem.forEach((item)=>
      item.classList.remove('ativo')
  )
  this.classList.add('ativo')
  }
  menuItem.forEach((item)=>
    item.addEventListener('click', ativarLink)
)