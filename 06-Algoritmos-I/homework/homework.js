// No cambies los nombres de las funciones.
// 180 / 2
// 90 / 2 
// 45 / 3
// 15 / 3
// 5 / 5
// 1

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var numIni = [1];// 1 paso
  var div = 2;// un paso
  while(num !== 1){// N pasos (nose cuantas veces, eso depende del numero que me pasen).
        if(num % div === 0){// N veces
            numIni.push(div);
            num = num / div;
        }
        else{
          div++;
        }
  }
  return numIni;// 1 PASO
};

// Todoslos que sean un slo paso seran despresiables porque no influyen en la gran escala

// aux ---> 0
// 
// [0,1,2,5,9]

//  0 1 2 3 4

// i = ;

// Calcular complejidad

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort 
  //para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var swap = true;
  var aux = 0;
   while(swap){
    swap = false;
    for (var i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]){

        aux = array[i + 1];

        array[i + 1] = array[i];

        array[i] = aux;

        swap = true;
      }
      
    }

   }
     return array;
};
// j = -1;
// aux ---> 1
// [1 ,2 ,4 , 8]
//  0  1  2   3
//        j   i

// []

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 for (var i = 1; i < array.length; i++) {
    var j = i-1;
    var aux = array[i];
      while(j >= 0 && array[j] > aux){

         array[j + 1] = array[j];


         j--;   
      } 

   array[j + 1] = aux;

 }

};


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length - 1; i++) {
    let posMin = i;
    for (var j = i + 1; j < array.length; j++) {
        if(array[j] < array[posMin]){
            posMin = j;
        }
    }
    if(i !== posMin) {
      var aux = array[i];
      array[i] = array[posMin];
      array[posMin] = aux;
    }
  }
  return array;
}

//ejemplo de algotimos de Franco:
  // function algo(array) {
  //   var max = array[0]; // 1
  //   for (var i = 0; i <= array.length; i++) { // n veces
  //       if(array[i] > max){ // 1
  //          max = array[i]; // 1
  //       }
  //   }
  //    console.log(max); // 1
  // }
  // 1 + N x 2 + 1 = 2 + 2N 

  // O(2N + 2) ---> O(2N) ---> O(N)  // vamos a ir desperciando operaciones en las que sumemoso multilpiquemos valores respecto a N.


// for( var i = 0, i <= array.lenght; i++){
//   for( var j = 0, j <= array.lenght; j++){
//     if(array[i] === array[j]){
//     return true;
//     }
//   }
// };
// O( N x N) = O (n²)




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
