let jogador = 'X';
const span = document.getElementById('turnPlayer');
const position1 = document.querySelector('.cursor-pointer1');
const position2 = document.querySelector('.cursor-pointer2');
const position3 = document.querySelector('.cursor-pointer3');
const position4 = document.querySelector('.cursor-pointer4');
const position5 = document.querySelector('.cursor-pointer5');
const position6 = document.querySelector('.cursor-pointer6');
const position7 = document.querySelector('.cursor-pointer7');
const position8 = document.querySelector('.cursor-pointer8');
const position9 = document.querySelector('.cursor-pointer9');

span.innerText = jogador;

function jogar(celula) {
  if (celula.innerText == "") {
    celula.innerText = jogador;
    celula.dataset.region = jogador;

    if (jogador == 'X') {
      jogador = 'O';
    } else {
      jogador = 'X';
    }
  }

  span.innerText = jogador;

  if (
    (position1.dataset.region == 'X' && position2.dataset.region == 'X' && position3.dataset.region == 'X') ||
    (position1.dataset.region == 'O' && position2.dataset.region == 'O' && position3.dataset.region == 'O')
  ) {
    alert(position1.dataset.region + " Venceu");
    position1.style.backgroundColor = 'green';
    position3.style.backgroundColor = 'green';
    position2.style.backgroundColor = 'green';
  } else if (
    (position4.dataset.region == 'X' && position5.dataset.region == 'X' && position6.dataset.region == 'X') ||
    (position4.dataset.region == 'O' && position5.dataset.region == 'O' && position6.dataset.region == 'O')
  ) {
    alert(position1.dataset.region + " Venceu");
    position4.style.backgroundColor = 'green';
    position5.style.backgroundColor = 'green';
    position6.style.backgroundColor = 'green';
  } else if (
    (position7.dataset.region == 'X' && position8.dataset.region == 'X' && position9.dataset.region == 'X') ||
    (position7.dataset.region == 'O' && position8.dataset.region == 'O' && position9.dataset.region == 'O')
  ) {
    alert(position1.dataset.region + " Venceu");
    position7.style.backgroundColor = 'green';
    position8.style.backgroundColor = 'green';
    position9.style.backgroundColor = 'green';
  } else if (
    (position1.dataset.region == 'X' && position4.dataset.region == 'X' && position7.dataset.region == 'X') ||
    (position1.dataset.region == 'O' && position4.dataset.region == 'O' && position7.dataset.region == 'O')
  ) {
    alert(position1.dataset.region + " Venceu");
    position1.style.backgroundColor = 'green';
    position4.style.backgroundColor = 'green';
    position7.style.backgroundColor = 'green';
  } else if (
    (position2.dataset.region == 'X' && position5.dataset.region == 'X' && position8.dataset.region == 'X') ||
    (position2.dataset.region == 'O' && position5.dataset.region == 'O' && position8.dataset.region == 'O')
 

    ) {
      alert(position1.dataset.region + " Venceu");
      position2.style.backgroundColor = 'green';
      position5.style.backgroundColor = 'green';
      position8.style.backgroundColor = 'green';
      } else if (
      (position3.dataset.region == 'X' && position6.dataset.region == 'X' && position9.dataset.region == 'X') ||
      (position3.dataset.region == 'O' && position6.dataset.region == 'O' && position9.dataset.region == 'O')
      ) {
      alert(position1.dataset.region + " Venceu");
      position3.style.backgroundColor = 'green';
      position6.style.backgroundColor = 'green';
      position9.style.backgroundColor = 'green';
      } else if (
      (position1.dataset.region == 'X' && position5.dataset.region == 'X' && position9.dataset.region == 'X') ||
      (position1.dataset.region == 'O' && position5.dataset.region == 'O' && position9.dataset.region == 'O')
      ) {
      alert(position1.dataset.region + " Venceu");
      position1.style.backgroundColor = 'green';
      position5.style.backgroundColor = 'green';
      position9.style.backgroundColor = 'green';
      } else if (
      (position3.dataset.region == 'X' && position5.dataset.region == 'X' && position7.dataset.region == 'X') ||
      (position3.dataset.region == 'O' && position5.dataset.region == 'O' && position7.dataset.region == 'O')
      ) {
      alert(position1.dataset.region + " Venceu");
      position3.style.backgroundColor = 'green';
      position5.style.backgroundColor = 'green';
      position7.style.backgroundColor = 'green';
      } else if (
      position1.innerText !== "" &&
      position2.innerText !== "" &&
      position3.innerText !== "" &&
      position4.innerText !== "" &&
      position5.innerText !== "" &&
      position6.innerText !== "" &&
      position7.innerText !== "" &&
      position8.innerText !== "" &&
      position9.innerText !== ""
      ) {
      alert("Empate!");
      }
      }
      
      document.querySelector('button').addEventListener('click', recomecar);
      
      function recomecar() {
      position1.innerText = "";
      position2.innerText = "";
      position3.innerText = "";
      position4.innerText = "";
      position5.innerText = "";
      position6.innerText = "";
      position7.innerText = "";
      position8.innerText = "";
      position9.innerText = "";
      
      position1.dataset.region = "";
      position2.dataset.region = "";
      position3.dataset.region = "";
      position4.dataset.region = "";
      position5.dataset.region = "";
      position6.dataset.region = "";
      position7.dataset.region = "";
      position8.dataset.region = "";
      position9.dataset.region = "";
      
      position1.style.backgroundColor = "#ddd";
      position2.style.backgroundColor = "#ddd";
      position3.style.backgroundColor = "#ddd";
      position4.style.backgroundColor = "#ddd";
      position5.style.backgroundColor = "#ddd";
      position6.style.backgroundColor = "#ddd";
      position7.style.backgroundColor = "#ddd";
      position8.style.backgroundColor = "#ddd";
      position9.style.backgroundColor = "#ddd";
      
      span.innerText = jogador;
      }