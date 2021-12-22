var alumnosListos = [];
var alumnosRegalados = [];
function mostrarNombres() {
    resetearSoft();
    var alumnos = [];
    var nombres = document.querySelector("#nombres").value;
    alumnos = nombres.split(",");
    var alumnosListos = [];
    var alumnosRegalados = [];

    //verificar que se introduce mas de un nombre
    if (alumnos.length <= 1) {
        alert("Debe introducir más de un nombre");
    }

    for (index in alumnos) {

        var alumno1 = alumnos[index];
        console.log(index, alumno1);

        do {
            var aleatorio = Math.floor(Math.random() * alumnos.length);
            var alumno2 = alumnos[aleatorio];
            console.log(alumnosRegalados.indexOf(alumno2))
            console.log(alumno2);

        } while (alumnosRegalados.indexOf(alumno2) != -1 || alumno1 == alumno2)

        if (alumnosRegalados.indexOf(alumno2) == -1) {
            //console.log(nombre1, nombre2)
            alumnosRegalados.push(alumno2);
            crearInputs(alumno1, alumno2);
        }


    }

}
function crearInputs(nombre1, nombre2 = "") {
    console.log(nombre1, nombre2)
    var contenedor = document.createElement("div");
    contenedor.setAttribute('class', 'd-flex flex-row contenedor');

    var entrada = document.createElement("input");
    var entrada2 = document.createElement("input");
    entrada.setAttribute('type', 'text');
    entrada.setAttribute('value', nombre1.trim());
    entrada.setAttribute('class', 'form-control m-2');
    entrada2.setAttribute('type', 'text');
    entrada2.setAttribute('value', nombre2.trim());
    entrada2.setAttribute('class', 'form-control m-2');
    contenedor.appendChild(entrada);
    contenedor.appendChild(entrada2);
    var parent = document.querySelector("#entradas");
    parent.appendChild(contenedor);

}
function resetear() {
    document.querySelector("#nombres").value = "";
    var element = document.querySelector("#entradas");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }  // location.reload();

}
function resetearSoft() {
    var element = document.querySelector("#entradas");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }  // location.reload();

}




