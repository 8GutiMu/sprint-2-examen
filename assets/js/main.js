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
  var numeroId = Date.now();

  var node = document.createElement("section");
  node.style.fontSize = "40px";
  node.id=numeroId+2;

  
  var textnode = document.createTextNode(contenido.titulo);
  node.appendChild(textnode);
  document.getElementById("listas").appendChild(node);

  var listaBebe = document.createElement("ul");
  var titulo_2 = document.createElement("h5")
  var boton = document.createElement("button");
  var texto = document.createElement("input");
  var linea = document.createElement("hr");
  var botonBorrar = document.createElement("button");
  texto.type = "text";
  texto.id = numeroId+1;
  listaBebe.id = numeroId;
  titulo_2.innerHTML = "Agrega un pendiente:";

  boton.innerHTML = "Agregar Pendiente";
  boton.onclick = function(){
    //agrega elementos dentro de la lista
    var id = texto.id;
    console.log(id);

    var pendienteTexto = document.getElementById(texto.id).value;


    //var textnode = document.createTextNode(pendienteTexto);

    if(pendienteTexto == ""){
      alert("NO estas metiendo NADAAAA!!!")
    }else{
      var node = document.createElement("LI");
      node.innerHTML = pendienteTexto;
    }


    //node.appendChild(textnode);
    document.getElementById(id-1).appendChild(node);
    document.getElementById(texto.id).value = "";

    }

    botonBorrar.innerHTML = "Borrar Lista";
    botonBorrar.onclick = function(){
      var id =node.id;
      console.log(id);
      var list = document.getElementById("listas");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }



    }




  console.log(listaBebe,boton,texto,node);

  //por cada lista pone un input y botn agregar y boton borrar
  document.getElementById("listas").appendChild(listaBebe);
  document.getElementById("listas").appendChild(titulo_2);
  document.getElementById("listas").appendChild(texto);
  document.getElementById("listas").appendChild(boton);
  document.getElementById("listas").appendChild(botonBorrar);
  document.getElementById("listas").appendChild(linea);
  document.getElementById("nombreLista").value = "";

}
