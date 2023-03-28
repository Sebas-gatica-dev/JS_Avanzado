// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  // let fac = n;
  // numero = n-1;
  // if(numero > 0){
  //    fac*= nFactorial(numero);
  // }
  // return fac

  // if(n<1){
  //   return 1
  // }
  // return n * nFactorial(n-1);
  if(n % 1 !== 0 ) return "Error solo se hace factorial de numeros enteros";

  if(n >= 0 && n < 2) return n;

  return n * nFactorial(n-1);
  //4 * 3 *  2 * 1
  //
  // Con operador ternario:

  //return n < 1 ? 0: n <= 2 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);

};

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  //                         0  1  2  3  4  5  6   7
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
//   if(n < 2) return n;
//   return nFibonacci(n-2) + nFibonacci(n-1);
// 
// resuelto por Franco:
 
 // validacion de numeros enteros
 if(n % 1 !== 0) return "Error";
 // validacion de input negativo
 if(n < 0) return "error";

 //Casos de corte/Casos base
if(n === 0) return 0;
if(n === 1) return 1;

//Recursion
return nFibonacci(n - 2) + nFibonacci(n - 1);

}
//                                                                     nFibonacci(0) <----  0

//                                            nFibonacci(2) <----  1            +
                  
//                  nFibonacci(4)  <--- 3             +                nFibonacci(1) <----  1


                                                            
//                                                                       nFibonacci(1) <----  1
//                                            nFibonacci(3) <----  2      


//                                                                                 +              nFibonacci(0) <----  0

//                                                                       nFibonacci(2) <----  1          +

// nFibonacci(6) <--- 8            +                                                             nFibonacci(1) <----  1
           





//                                                                        nFibonacci(1) <----  1


//                                               nFibonacci(3) <----  2          +
      
 
//                                                                                                nFibonacci(0) <----  0      

//                                                                        nFibonacci(2) <----  1            
 
//                                                                                                nFibonacci(1) <----  1          


//                  nFibonacci(5)  <---- 5             + 
                                


//                                                                                                nFibonacci(0) <----  0

//                                                                        nFibonacci(2) <----  1
                                                                                                  
//                                                                                                 nFibonacci(1) <----  1
                                                                          
//                                              nFibonacci(4) <----  3             +


 //                                                                                                 nFibonacci(1) <----  1


 //                                                                        nFibonacci(3) <----  2

//                                                                                                                        nFibonacci(0) <----  0


//                                                                                                  nFibonacci(2) <----  1


//                                                                                                                         nFibonacci(1) <----  1
//
//
//
//

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow 
//(devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(elm){

  this.array.push(elm);
  
};
// Queue.prototype.enqueue = function(){

//   return this.array.shift();
  
// }
Queue.prototype.dequeue = function(){

  return this.array.shift();
  
};

Queue.prototype.size = function(){

  if(this.array.length === 0) return 0;

  return this.array.length;
  
};


//* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
//* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. 
//Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. 
//Que representan cada lado del triángulo. `type` debe ser `Triangle`.
//* Agregá un nuevo método al prototipo llamado `getPerimeter`.

// function Shape(){
//   this.type = "Triangle";
//   this.getType = function(){
//      return this.type;
//   };
 
// }


// Shape.prototype.Triangule = function(a,b,c){
//   var obj = {
//     ladoA : a,
//     ladoB : b,
//     ladoC : c,
//   }
 
// }

// Shape.prototype.getPerimeter = function(){
//   var result = obj.ladoA + obj.ladoB + obj.ladoC ;
//   return result;
// }





// ```javascript
// > var t = new Triangle(1, 2, 3);
// > t instanceof Triangle
// // true
// > Shape.prototype.isPrototypeOf(t);
// // true
// > t.getPerimeter();
// // 6
// > t.getType();
// // "Triangle"
// ```


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
