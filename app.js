let amigos = [];

//Agregar un amigo al Array cuando se hace click en el botón añadir
function agregarAmigo (){
    let amigoNuevo = document.getElementById("amigo").value;
    if (amigo-amigoNuevo == ""){
        alert ("Por favor, inserte un nombre")
    } else {
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

function mostrarListaAmigos() {
    let amigosAgregados = document.getElementById("listaAmigos");
   let elementoLista = "";
   amigosAgregados.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        elementoLista = document.createElement ("li");
        elementoLista.textContent = amigos [i];
        amigosAgregados.appendChild(elementoLista);
    }
    //amigosAgregados.innerHTML = "";
    return;
}
/*
// Supongamos que tenemos un arreglo de nombres
const nombres = ['Juan', 'María', 'Pedro', 'Ana'];

// Seleccionamos el elemento del DOM donde queremos agregar la lista
const lista = document.getElementById('listaAmigos');

// Recorremos el arreglo y creamos los elementos de la lista
for (let i = 0; i < nombres.length; i++) {
  // Creamos un elemento <li>
  const elemento = document.createElement('li');
  
  // Agregamos el nombre al elemento <li>
  elemento.textContent = nombres[i];
  
  // Agregamos el elemento <li> a la lista
  lista.appendChild(elemento);
}
  */