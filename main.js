const btnHamburger = document.querySelector('#btnHamburger');
const Links = document.querySelector('.links');
const header = document.querySelector('.header'); 

btnHamburger.addEventListener('click', function(){
  if(btnHamburger.classList.contains('active')){ 
    btnHamburger.classList.remove('active');
    Links.classList.remove('active');
    header.classList.remove('open');
    }
  else {
    btnHamburger.classList.add('active');
    Links.classList.add('active');
    header.classList.add('open');
  }
});