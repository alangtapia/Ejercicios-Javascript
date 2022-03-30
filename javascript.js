

/////////// Numeros par del 0 al 10
// for ( let i = 0; i <= 10; i ++) {
// 	document.write(i);
// 	i ++;
// }


/////////////Tabla del 1 al 12

let body = document.getElementsByTagName("body")[0];
let tabla = document.createElement("table");
let tblBody = document.createElement("tbody");
for (let i = 1; i < 13; i++) {
  let fila = document.createElement("tr");
  for (let j = 1; j < 13; j++) {
    let celda = document.createElement("td");
    let multi = i * j;
    let textoCelda = document.createTextNode(multi);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
  }
tblBody.appendChild(fila);
}
tabla.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tabla);
tabla.setAttribute("border", 2);
tabla.setAttribute("id", "tabla");
let result = document.getElementById("resultado");
result.appendChild(tabla);


/////////////////

//// Convertir de kilometro a millas y viseversa

// function KM(valor){

// let resultado = valor / 1.6;

// document.write(resultado);

// };

// function MK(valor){
// let resultado = valor * 1.6;

// document.write(resultado);

// }


// let operacion = prompt("Seleccione la operacion\n "+"1-Kilometro a milla\n"+"2-Milla a kilometro");

// if (operacion == "1"){


//      let kilo = prompt("Indique los kilometros:");

//      KM(kilo);

// }

// else if (operacion == "2"){


// let milla = prompt("Indique las millas:");

//      MK(milla);
// }

// else {
// document.write("dato invalido");
// 	};

/////////////////////////  Sumar todos los valores de un array   /////////////////////////////////////


// let array1 = [2,-3,4,-6,8];
// let sumatoria1 = 0;

// let array2 = [3,2.37,6.48,5.24];
// let sumatoria2 = 0;

// for (let i of array1){


// sumatoria1 += i;

// }
// document.write(sumatoria1 + " la sumatoria de valores negativos y positivos <br>");


// for (let i of array2){


// sumatoria2 += i;

// }
// document.write(sumatoria2 + " la sumatoria de valores enteros y decimaless<br>");

////////////////////Invertir valores de un array/////////////////////////////////////

// let array3 = [1,2,3,4,5];

// document.write("Orden correcto "+ array3 + "<br>");

// array3.reverse();

// document.write("Al reves "+ array3 + "<br>");


////////////////////orgnizar array de menor a mayor   ////////////////////////////


// let arreglo = [3 ,25 ,68 ,1 ,53];

// document.write("El arreglo es : ("+ arreglo + ")<br>");



// arreglo.sort(function(a, b){return a-b});

// document.write("El arreglo ordenado es : ("+ arreglo + ")<br>");


/////////////////////////Filtrar numeros negativos

// let numeros = [2,-5,4,24,-67];

// let resultado = numeros.filter((item) =>  item > 0);

// document.write(resultado);


/////////////Remover espacios en un string

// let frase = ("Esta frase es solo prueba <br>");

// document.write(frase);

// document.write(frase.replace(/ /g, ""))



//////////////////Devlover un booleano si el numero es divisible entre 10


// let number = prompt("Dame un numero");

// if (number % 10 == 0 ){

 

//  document.write("El numero "+number+" es divisible entre 10");
// }

// else{

// let resultado = false;

// document.write("El numero "+number+" no es divisible entre 10");

// }


//////////////////////////////////Contar vocales
// const vocales = ["a", "e", "i", "o", "u"]

// function contarvocales(str) {
//     let contar = 0;

//     for (let letra of str.toLowerCase()) {
//         if (vocales.includes(letra)) {
//             contar++;
//         }
//     }

//     return contar
// }


// const string = prompt('Dite algo ahi ');

// const resultado = contarvocales(string);

// document.write(resultado);