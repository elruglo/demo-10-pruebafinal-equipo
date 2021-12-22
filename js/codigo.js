function mostrarNombres() {
    var nombres = document.querySelector("#nombres").value;
    var alumnos = nombres.split(",");
    var alumnosListos = [];
    var alumnosRegalados = [];
    console.log(alumnos);
    if (alumnos.length <= 1){
        alert("debes introducir mas de un nombre");
    }
    while (alumnos.length != alumnosListos.length && alumnos.length > 1) {
         
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

        } while (alumnosListos.indexOf(alumno1) == -1);



        /*  console.log(alumno1);
         console.log(aleatorio);
         console.log(alumnos); */

    }

}
function crearInputs(nombre1, nombre2 = "") {
    
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
    console.log(contenedor);
    var parent = document.querySelector("#entradas");
    parent.appendChild(contenedor);

}
function resetear(){
    location.reload();
   
}

