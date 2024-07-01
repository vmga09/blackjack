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
let score = document.querySelectorAll("small");
const divCartaJugador = document.querySelector("#jugador-carta");
const divCartaComputadora = document.querySelector("#computador-carta");

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

// Turno de la computadora

const turnoComputador = (puntosMinimos)=>{

    do {
    const carta = getCard();
    valor = valorCarta(carta);
    valorComputador = valorComputador + valor;
    score[1].innerText = valorComputador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartaComputadora.append(imgCarta);

    if(puntosMinimos > 21){
        break;
    }
    } while ( (valorComputador < puntosMinimos) && (puntosMinimos <= 21))
     setTimeout(() => {
        if(puntosMinimos == valorComputador ){
        alert(" Nadie Gana");
    }else if(puntosMinimos > 21){
        alert(" Perdió ej Juagador");
    } else if(valorComputador > 21)
        alert("Usuario gana!!!")
     }, 100);
    

}



// Eventos

btnPedir.addEventListener('click',()=>{
    const carta = getCard();
    valor = valorCarta(carta);
    valorJugador = valorJugador + valor;
    score[0].innerText = valorJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartaJugador.append(imgCarta);

    if(valorJugador > 21){
        console.warn("Perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(valorJugador);
    } else if(valorJugador == 21){
        console.info("Ganaste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }

})

btnDetener.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputador(valorJugador);
})

btnNuevo.addEventListener('click',()=>{
    location.reload();
})


