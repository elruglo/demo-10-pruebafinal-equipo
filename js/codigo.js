if(document.addEventListener) {
    document.addEventListener("DOMContentLoaded", inicio);
} else {
    alert("Por favor, actualice el navegador");
}
function inicio(){
}
function mostrarnombres(){
    var nombres = document.querySelector("#nombres").value;
    var arrayNombres = nombres.split(",");
    console.log(arrayNombres);

    for (var i=0; i<=arrayNombres.length-1; i++) {
        arrayNombres[i] =arrayNombres[i].trim();
    }

    console.log(pickRandom(arrayNombres.length));

}

function pickRandom(limite){
    var azar = Math.floor(Math.random()*limite);
    return azar;
}