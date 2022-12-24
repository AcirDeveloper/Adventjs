/**
 * Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año
Cosas a tener en cuenta y consejos:

El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.
 */

function countHours(year, holidays) {
    /* This line declares a variable called extraHours and initializes it to 0. This variable will be used to keep track of the number of extra hours worked on holidays that fall on weekdays. */
    let extraHours = 0
    for (let holiday of holidays) {
        /* This line creates a new Date object using the year and holiday variables. The holiday variable is in the format "MM/DD", so this creates a new date using the specified year and month/day combination. */
        let date = new Date(`${year}/${holiday}`)
        /* This line checks whether the day of the week for the date is a weekday (i.e., it is a day between Monday and Friday). The getDay() method returns a number representing the day of the week (0 for Sunday, 1 for Monday, etc.), so this check ensures that the day of the week is greater than 0 (i.e., not Sunday) and less than 6 (i.e., not Saturday). */
        if (date.getDay() > 0 && date.getDay() < 6) {
            extraHours += 2
        }
    }
    return extraHours
}
