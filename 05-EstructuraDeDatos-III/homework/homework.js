// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'

// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() 
//es ejecutado sin ninguna opcion o con la opcion "in-order.

// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() 
//es ejecutado con la opcion "pre-order".

// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() 
//es ejecutado con la opcion "post-order".

// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol
// utilizado para los tests.


function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.rigth = null;
};

BinarySearchTree.prototype.insert = function(value){//recibe un valor
  //WANDA
  if(value === this.value)throw Error("El valor recibido es igual al root");

  if(value > this.value){
      if(this.right !== null){
        this.right.insert(value)
      }
      else{

        this.right = new BinarySearchTree(value);
      }
      
  }


  if(value < this.value){
      if(this.left !== null){
        this.left.insert(value)
      }

      this.left = new BinarySearchTree(value);
  }






  if(value > this.value) {
  	//Deberia ir a la derecha
  	if(!this.right){
         //La posicion derecha esta libre
         this.right = new BinarySearchTree(value);
    }else{
    	//La posicon derecha esta ocupada
    	this.right.insert(value);//Utilizacion de recursion para recorrer el proximo
// elemento de la derecha.
    }

  }

  else{
        //Deberia ir a la izquierda
    if(!this.left) {
        //La posicion izquierda esta libre
        this.left = new BinarySearchTree(value);
      } else {
    	  this.left.insert(value);
      }
  }

  
};



BinarySearchTree.prototype.contains = function(value){
    //WANDA
 if(this.value === value) return true;
 // si el parametro es igual al valor del nodo actual :D.

 if(value > this.value) {
  if(this.right === null){
    return false;
  }
  return this.right.contains(value);
 } 

 else{
   if(value < this.value) {
     if(this.left === null){
           return false;
     }
     return this.left.contains(value);
   }

 }









  if(this.value === value) return true;
  
  if(value > this.value) {
  	if(!this.right) {
  		return false;
  	} else {
  		return this.right.contains(value);
  	}
  } else {
  	 if(!this.left) {
         return false;
  	 } else {
  	 	return this.left.contains(value);
  	 }
  }
}; 


BinarySearchTree.prototype.size = function(){
//WANDA
if(!this.left && !this.right) return 1;
//Si solo tenemos el root

if(!this.left && this.right) return 1 + this.right.size();
//al no tener un hijo a la derecha se ejecuta de nuevo size() apartir de ese hijo derecho;

if(this.left && !this.right) return 1 + this.right.size();
//lo mismo que la linea anterior pero a la izquierda


if(this.left && this.right) return 1 + this.left.size() + this.right.size();
//se abren dos size() uno por cada hijo.





//Nodo hoja (BST)
if(!this.left && !this.right) return 1;

//Nodo con un solo hijo (BST)
if(!this.left) return 1 + this.right.size();
if(!this.right) return 1 + this.left.size();

//Nodo con ambos hijos (BST)
return 1 + this.left.size() + this.right.size();


}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){//desde arriba hacia abajo, sin parametro order hace in-order.
//WANDA,
//pre-order: root-left-right
if(order === "pre-order"){
  cb(this.value);
   if(this.left !== null)this.left.depthFirstForEach(cb,order);
   if(this.right !== null)this.right.depthFirstForEach(cb,order);  
}

else if(order === "post-order"){
  //post-order: left - right - root

   if(this.left !== null)this.left.depthFirstForEach(cb,order);
   if(this.right !== null)this.right.depthFirstForEach(cb,order);  
    cb(this.value);
}

else{
  //in-order: left-root-right
   if(this.left !== null)this.left.depthFirstForEach(cb,order);
    cb(this.value);
   if(this.right !== null)this.right.depthFirstForEach(cb,order);  
  

}






// In-order
if(!order || order === 'in-order'){
	this.left && this.left.depthFirstForEach(cb, order);//el && en este caso actua como un if, 
  //el cual ejecuta el primer coadigo, pero en caso de que de false, 
  //no ejecuta e codigo que estasando el &&
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);

} else if(order === 'pre-order'){
	cb(this.value);
	this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
}
 else{
	this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
};






BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
 //WANDA recorrer izquierda recha un nivel a la vez, necesitamos donde guardar el proximo nodo que se nos queda desconectado, el hermano del mismo nivel pero de la direccion contraria. 
 // definir el array vacio para guardar la referencia del hermano inconexo..
 if(this.left !== null) {
    array.push(this.left);
    //pushea el valor de la izquierda en el array predefinido
 }
 if(this.right !== null){
  array.push(this.right);
  //pushea el valor de la derecha en el array predefinido
 }

cb(this.value);

if(array.length > 0){
  array.shift().breadthFirstForEach(cb, array);
  //shift() va a quitar del array predefinido y lo va a retornar, de esa forma la funcion recursiva vuelve a ejecutarse apartir 
  //del valor que shift retorna...
}






  cb(this.value);
  
  if(this.left) array.push(this.left);
  if(this.right) array.push(this.right);	

  // if(array.length > 0) array.shift().breadthFirstForEach(cb)
  array.length && array.shift().breadthFirstForEach(cb, array);
};

//Para los recorridos teneos 3 tipos diferentes de ordenes en los que se den, "in-order", "pre-order","post-order".
//in-order: primero a la izquierda, despues vos y despues a la derecha.



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
