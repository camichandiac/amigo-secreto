let amigos = [];

//Agregar un amigo al Array cuando se hace click en el botón añadir
function agregarAmigo (){
    let amigoAgregado = document.getElementById("amigo").value;
    amigos.push (amigoAgregado);
    console.log (amigos);
    limpiarCaja();
    return;
}

//Limpiar el input después de agregar un amigo.
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}



