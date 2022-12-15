let ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
]

let oveja = []

for (let i = 0; i < ovejas.length; i++) {
    let letras = ovejas[i].name.toLowerCase()
    if (letras.includes('a') && letras.includes('n') && ovejas[i].color === 'rojo') {
        oveja.push(ovejas[i])
    }
}

console.log(oveja)

/* let letras = ovejas[0].name.toLowerCase().split('');
console.log(letras);
if (letras.includes('a') && letras.includes('n')) {
    console.log('Si');
} */
