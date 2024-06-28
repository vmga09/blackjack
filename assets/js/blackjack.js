/*
  2C = Trebol
  2D = Diamante
  2H = Corazones
  2S = Espadas



*/

let deck = [];
const tipos = ["C","D","H","S"]
const mayores = ["A","J","Q","K"]



const creaDeck = ()=>{

    for (let i=2;i<=10;i++){
        for (let tipo of tipos){
            deck.push(i+tipo)
        }
    }

    for (let mayor of mayores){
        for (let tipo of tipos){
            deck.push(mayor+tipo)
        }
    }

    console.log(deck)
    deck = _.shuffle(deck)
    console.log(deck)
}

creaDeck();