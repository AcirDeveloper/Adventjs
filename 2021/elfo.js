let carta = 'bici coche  bici  _plastation  balon coche peluche '

let listarRegalos = (carta) => {
    let count = {}
    let regalos = carta.split(' ')
    for (let i = 0; i < regalos.length; i++) {
        if (!regalos[i].includes('_') && regalos[i] !== '') {
            if (count[regalos[i]]) {
                count[regalos[i]]++
            } else {
                count[regalos[i]] = 1
            }
        }
    }
    return count
}

console.log(listarRegalos(carta))
