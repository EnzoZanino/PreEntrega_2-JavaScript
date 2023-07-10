

/* // LISTADO DE ALUMNOS EN UN CURSO - LISTADO DE ALUMNOS EN UN CURSO - LISTADO DE ALUMNOS EN UN CURSO - LISTADO DE ALUMNOS EN UN CURSO  */

let contador = 0
const listaNombres = []
console.log(listaNombres.length)
let cantidad = Number(prompt('Ingrese cantidad de alumnos en curso que desea ingresar:'))

do {
    let entrada = prompt('Ingresar nombre de alumno en el curso:')
    listaNombres.push(entrada.toUpperCase())
    contador++
    alert('Ha ingresado el alumno numero: ' + contador)
    if (contador === cantidad) {
        alert('lista terminada')
    }
}while(listaNombres.length !== cantidad)

console.log(listaNombres.join('\n'))

function findFilter (opcion) {
    switch (opcion) {
        case '1':
            let nombreAlumno = prompt('Nombre de alumno que desea buscar:')
            let alumnoMayus = nombreAlumno.toUpperCase()
            let busqueda = listaNombres.find((alumno) => alumno.includes(alumnoMayus))
            return alert('alumno buscado: ' + busqueda)
        case '2':
            let nombreAlumno2 = prompt('Ingrese nombre que desea filtrar:')
            let alumnoMayus2 = nombreAlumno2.toUpperCase()
            let busqueda2 = listaNombres.filter((alumno) => alumno.includes(alumnoMayus2))
            return alert('alumnos filtrados: ' + busqueda2)
    }
}

let findFilterFinal = findFilter(prompt('Escriba 1 si quiere buscar o 2 si desea filtrar'))

/* // LISTADO DE ALUMNOS EN UN CURSO - LISTADO DE ALUMNOS EN UN CURSO - LISTADO DE ALUMNOS EN UN CURSO - LISTADO DE ALUMNOS EN UN CURSO  */

/* CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA / CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA /  */

function calculadora(operacion, numero1, numero2){
    switch (operacion) {
        case '+':
            return numero1 + numero2
            break;
        case '-':
            return numero1 - numero2
            break;
        case '/':
            if (numero2 === 0) {
                return 'no se puede dividir por cero'
            }
            return numero1 / numero2
            break;
        case '*':
            return numero1 * numero2
            break;
        case '%':
            let numeroPorcentajeTotal = prompt('El 100% de mi numero es:')
            let porcentajeDeseado = prompt('quiero el ...% del total: ')
            return resultado2 = (porcentajeDeseado * numeroPorcentajeTotal / 100)
        default:
            return 'Debe definir una operación correcta'
            break;
    }
}

let resultadoOperacion = prompt('Ingrese que operacion desea ejecutar: (+, -, *, / o %)');
if (resultadoOperacion != '%') {
    let resultado1 = calculadora (resultadoOperacion, Number(prompt('ingrese numero 1')), Number(prompt('ingrese numero 2')) )
    alert('El resultado es: ' + resultado1)
} else {
    let resultado2 = calculadora (resultadoOperacion, 0, 0)
    alert('El resultado es: ' + resultado2)
}


/* CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA / CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA /  */