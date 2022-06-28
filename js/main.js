
// calculadora

let numero1 = parseInt(prompt("Para utilizar la calculadora por favor ingresar el primer numero"));
let numero2 = parseInt(prompt("Ingresar numero 2 "));


while(isNaN(numero1)|| isNaN(numero2)){
    alert("Por favor ingresar numeros")
    
 numero1 = parseInt(prompt("Para utilizar la calculadora por favor ingresar el primer numero"));
 numero2 = parseInt(prompt("Ingresar numero 2 "));
};
let operacion = prompt("Ingresar operación a utilizar ( +,-,*,/)");

 if ( operacion === "+"|| operacion === "-"|| operacion === "*" || operacion === "/" ){

    switch(operacion){
        case "+":
            suma = numero1 + numero2 ;
            console.log(suma);
            break;
        case "-":
            resta = numero1 -numero2;
            console.log(resta);
            break;
        case "/":
            division = numero1/numero2;
            console.log(division);
            break;
        case "*":
            multiplicar = numero1*numero2;
            console.log(multiplicar);
            break;
        default:
            alert("Se debe utilizar los simbolos que se encuentran en el cuadro de texto");
            break;
    
    };
 }else {
     alert("Por favor ingresar una de las siguientes operaciones que se muestran en el mensaje, recarga la pagina");
 };

// pregunta, como puedo hacer para validar que la persona entre correctamente el input de operaciones y logar que en el caso que se equivoque vuelva a estar en el ciclo.



