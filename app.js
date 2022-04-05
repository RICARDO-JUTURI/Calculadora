let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')
let process = require("process")
//console.log(process)



let operacion =process.argv[2]  //sumar    //tambien podemos añadir tolowercase.
let numero1 = Number(process.argv[3])   //2
let numero2 = +process.argv[4]  //5   //ponemos signo + para que siempre lleguen numeros, o NUMBER.

if(operacion === "sumar"){
    console.log("-----")
    console.log("Señor el resultado de SUMA es") // dentro del console.log podemos añadir cualquier dato.
    console.log("________")
    console.log(sumar(numero1, numero2))
    console.log("Desea realizar otra suma?")
}
//console.log(operacion)
//console.log(numero1)
//console.log(numero2)
if(operacion === "dividir"){
    console.log("----")
    console.log("DIVICION")
    console.log("_____")
    console.log(dividir(numero1, numero2))
 }

if(operacion === "restar"){  
    console.log("RESTA")
    console.log("________")
    console.log(restar(numero1,numero2))
  }

if(operacion ==="multiplicar"){  
console.log("----")
console.log("MULTIPLICAR")
console.log("-----")
console.log(multiplicar(numero1,numero2)) 
 }
 