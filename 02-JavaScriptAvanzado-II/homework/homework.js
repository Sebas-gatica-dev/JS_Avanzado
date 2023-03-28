
function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  var count = 0;

  return function(){

    return ++count;


  }

  //-------HECHO POR FRANCO
   

}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
    var cache = {};
    
    return function(arg){
      
      if(cache.hasOwnProperty(arg)) return cache[arg];
      
      var result = cb(arg);
      
      cache[arg] = result;
      
      return result;
      
    }
  

  //-------HECHO POR FRANCO
  
}

// -------------------------------------------------------//resolucion de diego de cacheFunction
// let cache = {};

// return function (arg){
//   if(cache.hasOwnProperty(arg)){
//        return cache[arg];
//   }else{
//      const resultado = cb(arg);
//      cache[arg] = resultado;
//    return resultado;
//   }
  
// }
// --------------------------------optimizado

// if(!cache.hasOwnProperty(arg)){
//   cache[arg] = cb(arg);
// }
// return cache[arg];


// ------------------------------------------------------

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
 getNombreInstructor = getNombre.bind(instructor);
 getNombreAlumno = getNombre.bind(alumno);


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/


  //-------HECHO POR FRANCO




function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(null,"*","*") ;

let textoGuiones = crearCadena.bind(null,"-","-") ;

let textoUnderscore = crearCadena.bind(null,"_","_") ;



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};

// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1
// 0! = 1
// // hipotesis: x es un numero entero
// function factorial(x){
//   //casos de corte / casos de base
//   if(x > -1 && x < 2) return 1; // Cuando -1 < x < 2
//   //
//   else if(x < 0 ) return 0; // no existe factorial de numero negativos

//   //Parte de Recursion
//   return x * factorial(x - 1)
// }

// Execution Stack

// Global

// 6
// factorial(3) --> return 3 * factorial(2) <-- 2

//     factorial(2) --> return 2 * factorial(1) <-- 1

//         factorial(1) --> 1 | Corte la recuperacion y vuelvo hacia atras porque se cumplo la condicion del if;

//         for (var i = 0; i < str.length; i++) {
//           str[i]
//         }


