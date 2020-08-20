let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
nome.style.width = '100%';
email.style.width = '100%';


function validaNome(){
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 3){
    txtNome.innerHTML='Nome Invalido';
    txtNome.style.color = 'red';
    }else{
        nomeOk=true;
        txtNome.innerHTML='Nome Valido';
        txtNome.style.color ='green';
    }
    
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@')==-1||email.value.indexOf('.')==-1){
        txtEmail.innerHTML='Email invalido';
        txtEmail.style.color="red";
    }else{
        emailOk=true;
        txtEmail.innerHTML='Email valido';
        txtEmail.style.color='green';
    }
}
function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulario enviado com sucesso');
    }else{
        alert('Preencha o formulario corretamente antes de enviar... ')
    }
}

//Identificar o clique no menu
const menuItems = document.querySelectorAll('.menu a')

//Verificar a distancia entre o alvo e o topo
function getScrollTopByHref(element){
const id = element.getAttribute('href')
return document.querySelector(id).offsetTop
}



//Animar o scroll ate o alvo
function scrollToPosition(to){
 /*
 Caso queira o nativo do chrome apenas
 window.scroll({
     top:to,
     behavior:"smooth"
 })
 */   
smoothScrollTo(0,to)
}
//Verificar se o item foi clicado e fazer a referencia para o alvo dele
menuItems.forEach(item =>{
    item.addEventListener('click',scrollToIdOnClick)
})

function scrollToIdOnClick(event){
event.preventDefault();
const to = getScrollTopByHref(event.currentTarget) -80
scrollToPosition(to)
}

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
    * @param {int} duration: animation duration in ms
    */
   function smoothScrollTo(endX, endY, duration) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();
   
      duration = typeof duration !== 'undefined' ? duration : 400;
   
      // Easing function
      const easeInOutQuart = (time, from, distance, duration) => {
         if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
         return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
      };
   
      const timer = setInterval(() => {
         const time = new Date().getTime() - startTime;
         const newX = easeInOutQuart(time, startX, distanceX, duration);
         const newY = easeInOutQuart(time, startY, distanceY, duration);
         if (time >= duration) {
            clearInterval(timer);
         }
         window.scroll(newX, newY);
      }, 1000 / 60); // 60 fps
   };
   
   
   function enviar() {
      let nome = document.querySelector('#nome')
      let email = document.querySelector('#email')
      let conheceu = document.querySelector('#conheceu')
      let data = document.querySelector('#dtNasc')
      let estado = document.querySelector('#estado')
   
      if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || nome.value == '' || conheceu.value == '' || data.value == '' || estado.options[estado.selectedIndex].value == '') {
         alert('Preencha todos os campos antes de enviar o formulário!')
      } else {
         alert('Formulário enviado com sucesso!')
      }
   }