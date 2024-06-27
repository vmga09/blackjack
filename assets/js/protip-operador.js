const elMayor = (a,b) => (a > b) ? a :b;

console.log(elMayor(15,15))

const tieneMembresia = (miembro)=>(miembro)? '2 Dolares' : '10 Dolares';
console.log(tieneMembresia(false))

esAmigo = true

const amigos = [
    'Peter',
    'Tony',
    'Dr. Strange',
    esAmigo ? 'Thor' : 'Loki',
]

console.log(amigos)

const nota = 82.5;

const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';

console.log({nota, grado});