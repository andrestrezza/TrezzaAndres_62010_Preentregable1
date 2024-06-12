
//Declaración de primeras dos variables. El resto de las variables se fueron creando dentro de las funciones.
let nombreCliente
let edad

// Creamos la función por la cual solictamos el nombre y edad del cliente

function solicitarNombreCliente() {
    nombreCliente = prompt("Bienvenido, ¿Cómo es tu nombre?")
    alert("Hola, " + nombreCliente + ". Un gusto ayudarte a elegir tu comida")
    edad = prompt("¿Cuántos años tenes?")

    if (edad < 13) {
        alert("Por favor, pasale el celu a los papis para elegir tu menú.")
        solicitarNombreCliente()
    }

    else if (edad >= 13 && edad < 70) {
        alert("Excelente, ya estamos más cerca")
    }

    else if (edad >= 70) {
        alert("Felicitaciones, tenes un 10% de descuento")
    }

}
solicitarNombreCliente()

// Declaración de Arrays

const Menu = ["Hamburguesa", "pastas", "vegetariano", "pollo", "pizza", "menú infantil"]
const bebida = ["Gaseosa", "vino", "agua", "cerveza"]

//Agregamos un nuevo item al menú mediante PUSH
Menu.push("empanadas")

//Ordenamos alfabéticamente los arrays
Menu.sort()
bebida.sort()

console.log(Menu)
console.log(bebida)



// Función para que el usuario elija su menú
function elegirMenu() {

    let mensaje = "Elegí tu menú por favor:\n";
    for (let i = 0; i < Menu.length; i++) {
        mensaje += (i + 1) + ". " + Menu[i] + "\n";
    }

    let eleccion = prompt(mensaje);
    eleccion = parseInt(eleccion);


    if (isNaN(eleccion) || eleccion < 1 || eleccion > Menu.length) {
        alert("Por favor, elige un número válido.");

        elegirMenu();
    } else {
        let menuSeleccionado = Menu[eleccion - 1];

        let confirmacionDeMenu = confirm("Has elegido:  " + menuSeleccionado + ", ¿Correcto?");

        if (!confirmacionDeMenu) {
            elegirMenu()
        }

    }
}

elegirMenu()

// Función para que el usuario elija su bebida

function elegirBebida() {
    let mensaje = "Elegí la bebida para acompañar tu menú:\n";
    for (let i = 0; i < bebida.length; i++) {
        mensaje += (i + 1) + ". " + bebida[i] + "\n";
    }

    let eleccion = prompt(mensaje);
    eleccion = parseInt(eleccion);


    if (isNaN(eleccion) || eleccion < 1 || eleccion > bebida.length) {
        alert("Por favor, elige un número válido.");

        elegirBebida();
    } else {
        let bebidaSeleccionada = bebida[eleccion - 1];

        let confirmacionDeBebida = confirm("Has elegido:  " + bebidaSeleccionada + ", ¿Correcto?");

        if (!confirmacionDeBebida) {
            elegirBebida()
        }

    }
}

elegirBebida()




