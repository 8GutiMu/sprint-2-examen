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
  var boton = document.createElement("button");
  var texto = document.createElement("input");
  var linea = document.createElement("hr");
  var numeroId = Date.now();
  texto.type = "text";
  texto.id = numeroId+1;
  listaBebe.id = numeroId;
  boton.innerHTML = "Agregar Pendiente";
  boton.onclick = function(numeroId){
    var id = texto.id;
    var pendienteTexto = document.getElementById(texto.id).value;

    var node = document.createElement("LI");
    //var textnode = document.createTextNode(pendienteTexto);
    node.innerHTML = pendienteTexto;

    //node.appendChild(textnode);
    console.log(id-1);
    document.getElementById(id-1).appendChild(node);
}


  console.log(listaBebe,boton,texto);

  document.getElementById("listas").appendChild(listaBebe);
  document.getElementById("listas").appendChild(texto);
  document.getElementById("listas").appendChild(boton);
  document.getElementById("listas").appendChild(linea);



}
