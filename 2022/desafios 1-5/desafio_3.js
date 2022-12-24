/**
 * Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
Cosas a tener en cuenta:

Las cajas de regalos no se pueden dividir.
Los nombres de los regalos y los renos siempre serán mayores que 0.
 */

// Declare the function and define its parameters
function distributeGifts(packOfGifts, reindeers) {
    // Initialize variables to store the total weight of the gifts, the total weight that the reindeers can carry, and the number of boxes of gifts to distribute
    let totalWeight = 0
    let reindeerWeight = 0
    let boxes = 0

    // Iterate over the array of gifts and accumulate the weight of each gift in the totalWeight variable
    for (let gift of packOfGifts) {
        totalWeight += gift.length
    }

    // Iterate over the array of reindeers and calculate the weight that each reindeer can carry, accumulating the total in the reindeerWeight variable
    for (let reindeer of reindeers) {
        reindeerWeight += reindeer.length * 2
    }

    // Divide the total weight of the gifts by the total weight that the reindeers can carry, and use Math.floor to round down the result. Assign the result to the boxes variable.
    boxes = Math.floor(totalWeight / reindeerWeight)

    // Return the number of boxes of gifts
    return boxes
}
