


function mostrarNombres() {
    resetearSoft();
    var nombres = document.querySelector("#nombres").value;
    var alumnos = nombres.split(",").sort();
    var alumnosListos = [];
    var alumnosRegalados = [];
    console.log(alumnos);
    var alumnosRepes = nombresRepetidos(alumnos);
    console.log(alumnosRepes);
    if (!alumnosRepes) {
        if (alumnos.length > 1) {
            while (alumnos.length !== alumnosListos.length) {

                do {
                    var aleatorio = Math.floor(Math.random() * alumnos.length);
                    var alumno1 = alumnos[aleatorio];
                    var aleatorio = Math.floor(Math.random() * alumnos.length);
                    var alumno2 = alumnos[aleatorio];

                    if (alumnosListos.indexOf(alumno1) == -1 && alumnosRegalados.indexOf(alumno2) == -1 && alumno1 != alumno2) {
                        alumnosListos.push(alumno1);
                        alumnosRegalados.push(alumno2);
                        crearInputs(alumno1, alumno2);
                    }

                } while (alumnosListos.length !== alumnos.length);

            }
            var nombres = document.querySelector("#nombres").value = "";
        } else {
            alert("debe Introducir como minimo dos nombres");
        }
    } else {
        alert("No puede introducir nombres repetidos ni espacios en blanco")
        var nombres = document.querySelector("#nombres").value = "";
    }
}

function crearInputs(nombre1, nombre2) {

    var contenedor = document.createElement("div");
    contenedor.setAttribute('class', 'd-flex flex-row contenedor');
    var entrada = document.createElement("input");
    var entrada2 = document.createElement("input");
    entrada.value = nombre1;
    entrada.setAttribute('class', 'form-control m-2');
    entrada2.setAttribute('type', 'text');
    entrada2.value = nombre2;
    entrada2.setAttribute('class', 'form-control m-2');
    contenedor.appendChild(entrada);
    contenedor.appendChild(entrada2);
    var parent = document.querySelector("#entradas");
    parent.appendChild(contenedor);


}

function resetearSoft() {
    var element = document.querySelector("#entradas");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

}
function resetear() {

    location.reload();

}
function nombresRepetidos(alumnos) {
    var contador;
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i] == "") {
            return true
        }
        for (var j = 0; j < alumnos.length; j++) {
            if (alumnos[i] == alumnos[j] && i != j) {
                return true;
            }
        }
    }

}






