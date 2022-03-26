const form = document.querySelector('form');

let nome = JSON.parse(localStorage.getItem('nome')) || [];

function enviar(){
  let valor = form.nome.value;
  alert("registro concluido com sucesso");
  if(valor){
    nome.push(valor);
    localStorage.setItem('nome', JSON.stringify(nome));
  }
}

let array = JSON.parse(localStorage.getItem('nome'));
let div1 = document.querySelector('.espaco1');
let div2 = document.querySelector('.espaco2');
let div3 = document.querySelector('.espaco3');
array.forEach( (e, indice) => {
  if(indice < 6){
    let p = document.createElement('p');
    p.innerHTML = e;
    p.style.margin='2px'
    p.style.color='white';
    p.style.fontSize='100%';
    p.style.fontFamily='Roboto';
    p.style.fontWeight='Bold';
    div1.appendChild(p);
  }
  else if(indice < 12){
    let p = document.createElement('p');
    p.innerHTML = e;
    p.style.margin='2px'
    p.style.color='white';
    p.style.fontSize='100%';
    p.style.fontFamily='Roboto';
    p.style.fontWeight='Bold';
    div2.appendChild(p);
  }
  else if(indice < 18){
    let p = document.createElement('p');
    p.innerHTML = e;
    p.style.margin='2px'
    p.style.color='white';
    p.style.fontSize='100%';
    p.style.fontFamily='Roboto';
    p.style.fontWeight='Bold';
    div3.appendChild(p);
  }
})

function excluir(){
  localStorage.clear();
}