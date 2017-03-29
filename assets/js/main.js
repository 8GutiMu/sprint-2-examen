function POOLista(titulo){
  this.titulo = titulo;


}

var todasLasListas=[];
function crearLista(){
  var titulo = document.getElementById("nombreLista").value;

  var lista = new POOLista(titulo);
  todasLasListas.push(lista);
  console.log(lista)
  console.log(todasLasListas)
  mostrar(lista);

}

function mostrar(contenido){
  var lista = document.getElementById("listas");
  var nuevaLista = document.createElement("section")
  nuevaLista.innerHTML = contenido;
  nuevaLista.appendChild(lista);



}
