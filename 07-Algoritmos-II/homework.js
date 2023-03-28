// No cambies los nombres de las funciones.


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  for(let i=0; i<array.length; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    }else if(array[i] > pivot){
      right.push(array[i]);
    }else{
      // pivote se encuentra aca !
      equal.push(array[i]);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));
}

// length = 5
// [4, 1, 6, 2, 9]
//           ^
// left = 1
// right = 4, 6, 9
// equal = 2

// quickSort([1]).concat([2]).concat(quickSort([4,6,9]))
//         [1,2]                          [4,6,9]
// [1,2,4,6,9]
//
// quickSort([4,6,9])
// [4, 6, 9]
//     ^
// left = 4
// right = 9
// equal = 6
//quickSort([4]).concat([6]).concat(quickSort([9]))
//      [4,6,9]

function split_array(array){
  let middle = Math.floor(array.length/2);
  // splice > impacta sobre el arreglo original
  // slice > devuelve una copia del arreglo original recortado
  let left = array.slice(0, middle); // [0, middle)
  let right = array.slice(middle); // [middle, final]

  return [left, right]; // [[left], [right]]
}

function merge(left, right){
  // left = [1, 4,5]
  //     right = [2,8]
  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // array = [1, 2, 4, 5, 8]
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;

  // [5, 4, 3, 2, 1]
  let div = split_array(array); // a que es igual div? div es un array !
  // div = [[left], [der]]
  let left = div[0]; // [left]
  let right = div[1]; // [der]

  return merge(mergeSort(left),mergeSort(right));
}

// mergeSort([5, 1, 4, 2, 8])
//   div = ([5, 1, 4], [2,8])
//   left = [5, 1, 4]
//   right = [2,8]
// merge(mergeSort([5, 1, 4]), mergeSort([2,8]) = [1, 2, 4, 5, 8]
//             [1, 4,5]             [2,8]

// mergeSort([5, 1, 4])
// merge(mergeSort([5,1]), mergeSort([4]))
//           [1,5]              [4]

// (mergeSort([5,1]) = [1,5]
// merge(mergeSort([5]), mergeSort([1]))
//              [5]    ,      [1]
//


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
