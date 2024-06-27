const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if ( dia === 0 || dia === 6 ){
//     console.log('fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }


// Operador ternario
horaApertura = ( [0,6].includes() ? 9 : 11);

mensaje = (horaActual >= horaApertura ? "Esta abierto" : `esta cerrado, abrimos a ${horaApertura}`)


// if (horaActual >= horaApertura){
//     mensaje = "Esta abierto"
// } else{
//     mensaje = `Esta cerrado. Abrimos a las ${horaApertura}`
// }

console.log({mensaje,horaApertura})