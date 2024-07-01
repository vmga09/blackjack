/*
  2C = Trebol
  2D = Diamante
  2H = Corazones
  2S = Espadas



*/

// Referencias al DOM
const btnPedir = document.querySelector("#btn-pedir");
const btnNuevo = document.querySelector("#btn-nuevo");
const btnDetener = document.querySelector("#btn-detener");
let score = document.querySelector('small');

// Variables
let valorJugador = 0, valorComputador = 0;
let deck = [];
const tipos = ["C", "D", "H", "S"];
const mayores = ["A", "J", "Q", "K"];

const creaDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let mayor of mayores) {
    for (let tipo of tipos) {
      deck.push(mayor + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

desk = creaDeck();

const getCard = () => {
  // if (arr && arr.length){
  //     const indice = Math.floor(Math.random()*arr.length);
  //     const  card = arr[indice];
  //     arr.splice(indice,1);
  //     return {card, arr}

  // }

  if (deck.length === 0) {
    throw "No hay cartas";
  }

  const card = deck.pop();
  return card;
};



const valorCarta = (carta) => {
    let puntos = 0;
  const valor = carta.substring(0, carta.length - 1);
  console.log({ valor });
//   if (isNaN(valor)) {
//     console.log("No es un numero");
//     puntos = (valor === 'A')? 11 : 10;
//   } else {
//     console.log("Es un numero");
//     puntos = valor*1;
//   }
//   console.log(puntos);

  return puntos = isNaN(valor) ? 
          (valor === 'A')? 11 : 10 
          : valor * 1 ;
   
};



// Eventos

btnPedir.addEventListener('click',()=>{
    const carta = getCard();
    valor = valorCarta(carta);
    valorJugador = valorJugador + valor;
    score.innerText = valorJugador;

})