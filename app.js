let amigos = [];
let amigosAgregados = "";

//Agregar un amigo al Array cuando se hace click en el botón añadir
function agregarAmigo (){
    let amigoNuevo = document.getElementById("amigo").value;
    if (amigoNuevo == ""){
        alert ("Por favor, inserte un nombre")
    } else if (amigos.includes (amigoNuevo)){
            alert ("Nombre repetido, ingresa un nuevo nombre o incluye el apellido")
        }else{
            amigos.push (amigoNuevo);
            mostrarListaAmigos();
        }
    console.log (amigos);
    limpiarCaja();
    return;
}

//Limpiar el input después de agregar un amigo.
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function limpiarLista(){
    amigosAgregados.innerHTML = ""
}

function mostrarListaAmigos() {
    amigosAgregados = document.getElementById("listaAmigos");
    let elementoLista = "";
   //Elimina los nombres repetidos antes de iniciar el bucle
    limpiarLista();
    for (let i = 0; i < amigos.length; i++){
        //crea el nodo
        elementoLista = document.createElement ("li");
        //asigna texto al nodo
        elementoLista.textContent = amigos [i];
        //inserta el nodo a la estructura DOM
        amigosAgregados.appendChild(elementoLista);
    }
    //amigosAgregados.innerHTML = "";
    return;
}

function sortearAmigo(){
    let amigoSorteado = amigos [Math.floor(Math.random()*amigos.length)];
    let mostrarAmigoSecreto = document.getElementById ("resultado");
    if (amigos == ""){
        alert("Por favor, inserte al menos un nombre");
    }else{
        limpiarLista();
        mostrarAmigoSecreto.innerHTML = `Tu amigo secreto es ${amigoSorteado}`
    }
    }