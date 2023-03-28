// No cambies los nombres de las funciones.

//[5, 1, 4, 2, 8] 

//

//

//

// 
// 
// 
// 

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

if(array.length <= 1) return array;

let pivote = array[Math.floor(Math.random() * array.length)];

let left = [];

let right = []; 

let equal = [];

for (var i = 0; i < array.length; i++) {
  if(array[i] < pivot){
     left.push(array[i]);
  }
  else if(array[i] > pivot){
     right.push(array[i]);
  }
  else{
    // el pivote se encuentra aca
    equal.push(array[i]);
  }
}







// if (array.length <= 1) {
//     return array;
//   }

//   let pivot = array[0];
//   
//   let left = [];
//   let right = [];

//   for (let i = 1; i < array.length; i++) {

    // if(array[i]< pivot) left.push(array[i])
    // else right.push(array[i])

//     array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//   }

//   return quickSort(left).concat(pivot, quickSort(right));


};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
function mergeSort(array){
  // Caso base
  if (array.length <= 1) return array;

  const mitad = Math.floor(array.length/2)
  var left = array.slice(0, mitad);
  var right = array.slice(mitad);

  left = mergeSort(left);
  right = mergeSort(right);

  let resultado = [];
  let iLeft = 0;
  let iRight = 0;

  while (iLeft < left.length && iRight < right.length){
    if (left[iLeft] < right[iRight]){
      resultado.push(left[iLeft]);
      iLeft++;
    } else {
      resultado.push(right[iRight]);
      iRight++;
    }
  }


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
