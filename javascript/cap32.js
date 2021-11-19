function proximoEnLaFila(arr, elem) {
  //arr = arreglo, elem = elemento
  arr.push(elem); // Agregar al final del arreglo.
  return arr.shift(); // >Remover el primer elemento.
}

var miArray = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArray)); //JSON.stringify para presentar mejor el arreglo

console.log(proximoEnLaFila(miArray, 6));

console.log("Después: " + JSON.stringify(miArray));
