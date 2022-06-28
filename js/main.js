
// calculadora

let numero1 = parseInt(prompt("Para utilizar la calculadora por favor ingresar el primer numero"));
let numero2 = parseInt(prompt("Ingresar numero 2 "));


while(isNaN(numero1)|| isNaN(numero2)){
    alert("Por favor ingresar numeros")
    
 numero1 = parseInt(prompt("Para utilizar la calculadora por favor ingresar el primer numero"));
 numero2 = parseInt(prompt("Ingresar numero 2 "));
};
let operacion = prompt("Ingresar operación a utilizar ( +,-,*,/)");

while ( operacion !== "+" && operacion !== "-"&&  operacion !== "*" &&  operacion !== "/" ){

  
     alert("Por favor ingresar una de las siguientes operaciones que se muestran en el mensaje, recarga la pagina");
     operacion = prompt("Ingresar operación a utilizar ( +,-,*,/)");
 };

// funciones
function operaciones ( n1,n2,simbolo){
    switch(simbolo){
        case "+":
            suma = n1 + n2 ;
            console.log(suma);
            break;
        case "-":
            resta = n1 -n2;
            console.log(resta);
            break;
        case "/":
            division = n1/n2;
            console.log(division);
            break;
        case "*":
            multiplicar = n1*n2;
            console.log(multiplicar);
            break;
        default:
            alert("Se debe utilizar los simbolos que se encuentran en el cuadro de texto");
            break;
    
    };
    
}

operaciones(numero1,numero2,operacion);



