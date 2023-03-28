function BinarioADecimal(num) {
  // tu codigo aca

 function BinarioADecimal(num) {
  // tu codigo aca
  var arr = num.toString().split("");

   var index = arr.length-1;

    var result = 0;

  for (var i = 0; i < arr.length; i++) {
      
       result += Math.pow(2,index) * arr[i];

       index--; 

  }

    return result;
   
 }




function DecimalABinario(num) {
  // tu codigo aca
  
  // var res =  num.toString(2);
  //   return parseInt(res);

  let result = [];

  while(num > 0){

    result.unshift(num % 2);

    num = Math.floor(num / 2);

  };

   result = result.join("");

   return parseInt(result);

  };

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}