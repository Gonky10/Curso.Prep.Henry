// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D"(obj), 1(valor)], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var a = [];
 for (let clave in objeto){
   var b = [];
   b.push(clave);
   b.push(objeto[clave]);
   a.push(b);
 }
 return a;
  }   


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var S1 = "";
  var S2 = "";
  for (var i = 0; i < s.length; i++){
  if (s[i] == s[i].toUpperCase()){
    S1 = S1 + s[i];
}
else{
  S2 = S2 + s[i];
}
}
return S1 + S2;
}
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayStringinv = [];
  var arraypalabras = str.split(" ");
  for (i = 0; i<arraypalabras.length; i++){
    var arrayLetras = arraypalabras[i].split("");
    var arrayLetrasinv = arrayLetras.reverse();
    arrayStringinv.push(arrayLetrasinv.join(""));
  }
  return arrayStringinv.join(" ");
  }

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = "" + numero;
  var capicua = "";
  for (var i = string.length - 1; i>=0; i--){
    capicua = capicua + string[i];
  }
  if (string === capicua){
    return "Es capicua";
  }
  return "No es capicua"
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cade = "";
  for (var i = 0; i<cadena.length;i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      cade = cade + cadena[i]
    }
  }
  return cade;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var i = 0; i < arr.length; i++){
    for (var h = i + 1; h < arr.length; h++){
      if (arr[i].length > arr[h].length){
      var elemM = arr[i];
      arr[i] = arr[h];
      arr[h] = elemM;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var obj = [];
  for (var i = 0; i < arreglo1.length; i++){
    for (var j = 0; j<arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
        obj.push(arreglo1[i])
      }
    }
  }
  return obj;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

