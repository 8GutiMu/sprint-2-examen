function POOLista(titulo){
  this.titulo = titulo;

}

var todasLasListas=[];

//va creando nuevos objetos cada vez que se llama con el botn de el inicio
function crearLista(){
  var titulo = document.getElementById("nombreLista").value;

  var lista = new POOLista(titulo);
  todasLasListas.push(lista);
  mostrar(lista);


}

// muestra en pantalla todo
function mostrar(contenido){

  var node = document.createElement("section");
  node.style.fontSize = "40px";
  var textnode = document.createTextNode(contenido.titulo);
  node.appendChild(textnode);
  document.getElementById("listas").appendChild(node);

  var listaBebe = document.createElement("ul");

  crearPendientes()

}

function crearPendientes(){
  var node = document.createElement("li");
  var textnode = document.createTextNode("bren");
  node.appendChild(textnode);
  document.getElementsByTagName("ul")[0].appendChild(node);

}
