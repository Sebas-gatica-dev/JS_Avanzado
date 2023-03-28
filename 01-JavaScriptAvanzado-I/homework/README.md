
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```
<!-- la b que cambia dentro de la funcion f solo cambia dentro de la misma porque es un dato primitivo y pertenece a ese scope, basicamente porque es uno de los argumentos.
PRimero imprime 10 , la variable x, que pertenece al scope de la funcion c, luego se imprime 8 que es el primer parametro de la funcion c, luego vueve a imprimir 8 cuando la variable b del scope del scope dela funcion f pasa a tener el valor del parametro a, el proximo numero a imprimr es 9, ya que toma el valor del parametro b original pasado a la funcion c, y por ultimo se imprimen 10 y 1, quye pertenecen a las variables globales b y x. -->

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// los primer console log dan undefined pero el holding al ver debajo un bar seguido por bar, asume que es bar es una variable, no pasa lo mismo con baz que no tiene var, entonces el holding devuelve error. 
// Ejecuta foo(suponiendo que continua luego del error). 
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```
la variable instructor al ser una variable global transciende los scopes de las funciones, cuando trabajamos con var le da priopridad al contexto de ejecucion, si trabajamos con let y con var, le va a dar prioridad a los scopes.

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
//funcion autoinvocable
 Lo que sucede dentro de las funciones autoinvolables, es decir loas variables que pueda tener en su interior son siempre perecederas, dejan de existir junto con la funcion
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
 instructor se reescribe cuando pasa por la funcion, deja de ser tony, y se convierte en the flah y al pasar eso se transforma en The flash.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // 2
"2" * "3"  // 6
4 + 5 + "px"  // "9px"
"$" + 4 + 5  // "$45" si pusieramos lo numeros entre paarentesis primero resolveria la operacion y luego concatenaria.
"4" - 2   // 2
"4px" - 2  // NaN
7 / 0 // 0
{}[0] // undefined;
parseInt("09") // lo convierte en dato numerico
5 && 2 // 2 / si lo de la izquierda me va un valor afirmativo paso lo de la derecha
2 && 5
5 || 0
0 || 5 // 5
[3]+[3]-[10] // sumas y restas tienen la misma prioridad, primero hago la suma, entonces concatena los dos 3 como si fueran strings y al 33 en string - 10 si es una operacion matematica
3>2>1 // nos da false, por true es igual a uno y cuando llega a 3 > 1, nos da false porque 3 ya vale true.
[] == ![] /// ![] = false y [] = false, por lo tanto da true.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

undefined
 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);


```
te da undefined porque le damos como parametro false..

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
node no tiene un contexto global definido. Los que pasa con la funcion es qe la primera vez ejecuta la funcion dentro de su contexto principal, es decir donde fue definida y en la segunda ocasion es ejecutada desde su contexto global, que es el scope principal de su padre que es el objeto obj.
 En un principio definimos una funcion clasica, tiene acceso al contexto global en el que es llamada osea dentro del objeto prop, pero  en "var test = obj.prop.getFullname;" getFullname no esta invocando la funcion sino que es la referencia de la ubicacion en la memoria de la funcion en si misma por lo tanto la ejecuta en el objeto global, por en la segunda vez ejecuta Juan Perez y en el console.log() ejecuta "Aurelio de Rosa".

 una funcion normal toma en contexto global de donde esta siendo invocada, una arrow function toma el contexto globbal de donde esta siendo escrita.


### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

el orden seria 1 - 4 - 3 - 2

-----------------------------------------------------------------------------------------


  Explicacion de reduce()

 function myArray(array){
     function traeme() {
      return array
  }
   return {
      traeme: traeme;
   }
 }

 const arr = myArray([1,2,3]);

 console.log(arr.traeme());


 --------traeme

 const funciones = {
  log: function(data) {
    console.log(data)
  },
  suma: function(a,b){
    console.log(a+b)
  };
 };



 funciones.suma(5,10);




 function myArray(array){
  if(Array.isArray(array) === false){
    array = [];
  }

  return{
    listar: function() {
      return array;
    },
    agregar: function(elemento){
          array.push(elemento);
    },
    reduce: function(funcionCB, acumulador,){
      for (var i = 0; i < array.length; i++) {
        const elementoActual = array[i];
        acumulador = funcionCB(acumulador,elementoActual, i)   // primero acumulador-segundo elemento que iteramos-tercero el indice
      }
      return acumulador;
    }
  };
 }

 const array = myArray();


array.agregar(5);
array.agregar(25);

const mycb = function(acumulador, actual , i) => {
   return acumulador + valorActual;

}

const resultado = array.reduce(mycb,0);


const resultado = array.reduce((acumulador, valorActual, i)=>{
  return accumulador + valorActual; // ejemplo
},0);


console.log(array.listar());




//explicacion callback

function suma(a,b, cb){
  cb(a + b);
}

suma(3, 5, resultado => console.log(resultado));

// e decimos que queremos que haga de esa forma atravez del callback