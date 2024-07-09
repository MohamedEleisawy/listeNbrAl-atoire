document.addEventListener("DOMContentLoaded", function(){
  'use strict'
  let generate = document.getElementById('generate')
  
  generate.addEventListener('click', () =>{
  
  let div = document.createElement('div');
  let ul = document.createElement('ul');
  div.appendChild(ul);
  document.body.appendChild(div);
  
  
     for(let i = 0; i<10; i++){
      let randomNumber = getRandomInt(999);
      let li = document.createElement('li')
      li.textContent = randomNumber
      ul.appendChild(li)
      }
  })
  
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
     
})