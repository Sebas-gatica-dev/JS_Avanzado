const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

// countArray([1, [2, [3,4]], [5,6], ])
// suma = 1

// suma = 1 + 9
//

var countArray = function(array) {
  // Tu código aca:7
  let suma = 0;
  for(let i = 0; i<array.length; i++){
    if(Array.isArray(array[i])){
      // suma+=countArray(array[i]);
      suma = suma + countArray(array[i]);
    }else{
      suma = suma + array[i];
    }
  }
  return suma;
};

// console.log('countArray: ', countArray([1,2,3,4,5]));
// console.log('countArray: ', countArray([1, [2, [3,4]], [5,6], 7]));
// console.log('countArray: ', countArray([1, [2, [3,[4,4,4]]], [5,6], 7]));

// --------------------------------------------------------------------------------------------------------------------

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
// //   a: {
// //     a1: 10,
// //     a2: 'Franco',
// //     a3: {f: 'r', a: 'n', c: {o: true}}
// //   },
// //   b: 2,
// //   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total


// countProps(obj)
//   count = 0
//   a --> count = 1

//   countProps(obj.a)
//   count = 0
//   a1 --> count = 1
//   a2 --> count = 2
//   a3 --> count = 3

//     countProps(obj.a.a3)
//     ...

var countProps = function(obj) {
  // Tu código aca:
  var count = 0;
  for(var property in obj){
    count++;
    if(typeof obj[property] === 'object' ){
      if(!Array.isArray(obj[property])){
        count += countProps(obj[property]);
      }else{
        // recorre el arreglo y volve a llamar a counProps segun corresponda
      }
    }
  }
  return count;
};
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// };
//
// count = 1 + 7 + 1 + 1 = 10;


// --------------------------------------------------------------------------------------------------------------------

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1


// 1. Number > nos va a decir si es o no casteable
// no puedan castearse a numeros >> Number === NaN >> lo tengo que convertir


LinkedList.prototype.changeNotNumbers = function(){
  // Tu código aca:
  let current = this.head; // current Head
  let change = 0;
  while(current){
      if(isNaN(Number(current.value))){
        current.value = "Kirikocho";
        change++;
      }
      current = current.next;
  }
  return change;
};

// var listOne = new LinkedList();
// listOne.add(1);
// listOne.add('2');
// listOne.add(false);
// listOne.add('Franco');
// console.log('listOne: ', listOne.head.value + ' ' + listOne.head.next.value + ' ' + listOne.head.next.next.value + ' ' + listOne.head.next.next.next.value);
// console.log('changeNotNumbers: ', listOne.changeNotNumbers());
// console.log('listOne: ', listOne.head.value + ' ' + listOne.head.next.value + ' ' + listOne.head.next.next.value + ' ' + listOne.head.next.next.next.value);

// var listTwo = new LinkedList();
// listTwo.add('Franco');
// listTwo.add('2a');
// listTwo.add(null);
// listTwo.add({a: 1});
// console.log('listTwo: ', listTwo.head.value + ' ' + listTwo.head.next.value + ' ' + listTwo.head.next.next.value + ' ' + listTwo.head.next.next.next.value);
// console.log('changeNotNumbers: ', listTwo.changeNotNumbers());
// console.log('listTwo: ', listTwo.head.value + ' ' + listTwo.head.next.value + ' ' + listTwo.head.next.next.value + ' ' + listTwo.head.next.next.next.value);

// --------------------------------------------------------------------------------------------------------------------

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
  // Tu código aca:
  var newQueue = new Queue();
  while(queueOne.size() || queueTwo.size()){
    var elementone = queueOne.dequeue();
    var elementtwo = queueTwo.dequeue();
    if(elementone) newQueue.enqueue(elementone);
    if(elementtwo) newQueue.enqueue(elementtwo);
  }
  return newQueue;
};

// var queueOne = new Queue();
// queueOne.enqueue(1);
// queueOne.enqueue(3);
// queueOne.enqueue(5);
// queueOne.enqueue(7);
// queueOne.enqueue(9);
// var queueTwo = new Queue();
// queueTwo.enqueue(2);
// queueTwo.enqueue(4);
// queueTwo.enqueue(6);
// console.log('mergeQueues: ', mergeQueues(queueOne, queueTwo));

// --------------------------------------------------------------------------------------------------------------------

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
  // Tu código aca:
  return function(num){
    return multiplier * num;
  }
};

// var multBYfour = closureMult(4);
// var multBYtwo = closureMult(2);
// multBYfour(3) // 4*3
// multBYfour(2) // 4*2
// multBYtwo(3) // 2*3

// var multByFour = closureMult(4);
// console.log('multByFour: ', multByFour(2));
// console.log('multByFour: ', multByFour(5));
// var multBySix = closureMult(6);
// console.log('multBySix: ', multBySix(4));

// --------------------------------------------------------------------------------------------------------------------

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol

BinarySearchTree.prototype.sum = function() {
  // Tu código aca:
  if(!this.left && !this.right) return this.value;
  if(!this.right) return this.value + this.left.sum();
  if(!this.left) return this.value + this.right.sum();
  return this.value + this.left.sum() + this.right.sum();
};


// var bst = new BinarySearchTree(15);
// bst.insert(10);
// bst.insert(17);
// bst.insert(5);
// bst.insert(7);
// bst.insert(3);
// bst.insert(25);
// console.log('sum: ', bst.sum())


