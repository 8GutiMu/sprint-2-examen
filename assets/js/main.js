//mi clase lista

function POOLista(titulo){
  this.titulo = titulo;

}

var todasLasListas=[];

//va creando nuevos objetos cada vez que se llama con el botn de el inicio

function crearLista(){

  var titulo = document.getElementById("nombreLista").value;

  if(titulo == ""){
    alert("NO estas ingresando NADAAAA!!!")
  } else{
    var lista = new POOLista(titulo);
    todasLasListas.push(lista);
    mostrar(lista);

  }

}


// muestra en pantalla todo
function mostrar(contenido){
  var numeroId = Date.now();

  var node = document.createElement("section");     // crea la seccion
  node.style.fontSize = "40px";
  node.id=numeroId-1;
  console.log ("este es el "+node.id)

  var textnode = document.createTextNode(contenido.titulo);  //pone el titulo dentro de la seccion
  node.appendChild(textnode);
  document.getElementById("listas").appendChild(node);

  var listaBebe = document.createElement("ul");     //crea un elemento lista en cada seccion
          listaBebe.id = numeroId;  // id para lista

  var titulo_2 = document.createElement("h5");      //crea texto (Agregar un pendiente)
          titulo_2.innerHTML = "Agrega un pendiente:";

  var boton = document.createElement("button");     //crea botn para agregar pendiente
          boton.innerHTML = "Agregar Pendiente";

  var botonearase = document.createElement("button");     //crea botn borrar lista
                  botonearase.innerHTML = "Borrar lista";

  var texto = document.createElement("input");      // crea caja de texto para agregar pendiente
          texto.type = "text";   //tipo de input
          texto.id = numeroId+1; // id de input

  var linea = document.createElement("hr");         // crea una linea entre listas
  var botonEditarTitulo = document.createElement("button");   // crea boton para editar el titulo de cada lista
          botonEditarTitulo.innerHTML = "Editar Titulo";


  //agrega elementos dentro de la lista
  boton.onclick = function(){

    var id = texto.id;
    console.log(id);

    var pendienteTexto = document.getElementById(texto.id).value;

    if(pendienteTexto == ""){                      // comprueba que estes metiendo algo
      alert("NO estas metiendo NADAAAA!!!")
    }else{
      var node = document.createElement("LI");
      node.innerHTML = pendienteTexto;
      }


    document.getElementById(id-1).appendChild(node);
    document.getElementById(texto.id).value = "";

  }


  //edita el titulo
    botonEditarTitulo.onclick= function(){
      var id = node.id;
      console.log(id);
      var nuevoTitulo = prompt("Cual es el nuevo titulo? ");
      var titu = document.getElementById(id);
      titu.innerHTML= nuevoTitulo;

    }


    //borra la lista
    botonearase.onclick= function() {
      alert("Seguro quieres Borrar???")
      alert("Lo siento aun no pude borrar :( )")


    }

  //por cada lista pone un input y botn agregar y boton borrar
  document.getElementById("listas").appendChild(listaBebe);
  document.getElementById("listas").appendChild(titulo_2);
  document.getElementById("listas").appendChild(texto);
  document.getElementById("listas").appendChild(boton);
  document.getElementById("listas").appendChild(botonEditarTitulo);
  document.getElementById("listas").appendChild(botonearase);
  document.getElementById("listas").appendChild(linea);



  document.getElementById("nombreLista").value = "";      //vacia la caja al mandarse la funcion de pedir otra lista



}

function borrarTodo(){                                    //borra todas las lilstas y sus pendientes
  var list = document.getElementById("listas");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}
