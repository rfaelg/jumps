  let num = 0;
  let controle = 0;
  const ifrm = document.getElementById('jump');
  const sus = new Audio('susto-five-nights.mp3');
  ifrm.style.display = 'none';
  ifrm.style.maxHeight = '100vh'
  ifrm.style.maxWidth = '100vw'
  const botao = document.getElementById('botao');
  const p = document.getElementById('parag');
  const botaod = document.getElementById('des');
  const corpo = document.getElementById('corpo');
    function loop(){
    while (controle === 0) {
  console.log(num);
  num++
  };
};
function desarmar() {
  
  setInterval(() => {
    if (controle === 0) {
      p.innerHTML += num + "<br />";
      num++
    };
    if (num === 105) {
      setTimeout(() =>{
      p.style.display = 'none';
      },500);
      setTimeout(() => {
      botao.style.display = 'none';
      },500);
      setTimeout(() => {
      botaod.style.display = 'none';
      }, 500);
      setTimeout(() => {
      corpo.style.backgroundColor = 'black';
      }, 500);
      setTimeout(() => {
      ifrm.style.display = 'block';
      sus.play();
      }, 500);
      setTimeout(() => {
        p.style.display = 'block';
        p.style.color = 'red';
        ifrm.style.display = 'none';
      }, 10000);
    };
  }, 1);
  
};
