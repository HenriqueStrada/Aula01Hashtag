const nomeCapitulo = document.getElementById("musica");
const audio = document.getElementById("audio-musica");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quantidadeCapitulos = 6;
let taTocando = false;
let capitulo = 1;
window.onload = function() {

function tocarFaixa(){
  botaoPlayPause.classList.remove("bi-play-circle");
  botaoPlayPause.classList.add("bi-pause-circle");
  audio.play();
  taTocando = true;
}

function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle");
  botaoPlayPause.classList.remove("bi-pause-circle");
  audio.pause();
  taTocando = false;
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function capituloAnterior() {
  if (capitulo === 1) {

    capitulo = quantidadeCapitulos;
  } else {
    capitulo -= 1;
  }
  audio.src = "musicas/beatles/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Música " + capitulo;
  tocarFaixa();
}

function proximoCapitulo() {
  if (capitulo < quantidadeCapitulos) {
    capitulo += 1;
  } else {
    capitulo = 1;
  }
  audio.src = "musicas/beatles/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Música " + capitulo;
  tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
//////////////////////////////////
botaoProximoCapitulo.addEventListener("mouseover", function (){
  botaoProximoCapitulo.classList.remove("bi-skip-end");
  botaoProximoCapitulo.classList.add("bi-skip-end-fill");
});
botaoProximoCapitulo.addEventListener("mouseout", function (){
  botaoProximoCapitulo.classList.remove("bi-skip-end-fill");
  botaoProximoCapitulo.classList.add("bi-skip-end");
});
//////////////////////////////////
botaoCapituloAnterior.addEventListener("mouseover", function (){
  botaoCapituloAnterior.classList.remove("bi-skip-start");
  botaoCapituloAnterior.classList.add("bi-skip-start-fill");
});
botaoCapituloAnterior.addEventListener("mouseout", function (){
  botaoCapituloAnterior.classList.remove("bi-skip-start-fill");
  botaoCapituloAnterior.classList.add("bi-skip-start");
});
//////////////////////////////////

audio.addEventListener("ended", proximoCapitulo);
}