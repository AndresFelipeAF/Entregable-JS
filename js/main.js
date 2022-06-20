
// For loop
let numero = parseInt(prompt("Ingresar numero"));
let iteraciones = parseInt(prompt("numero de iteraciones"));

if((isNaN(numero)) ||( isNaN (iteraciones)) ){
    alert("Por favor ingresar un numero")
    numero = parseInt(prompt("Ingresar numero"));
    iteraciones = parseInt(prompt("numero de iteraciones"))
    for( i=0; i<=iteraciones; i++){

        let suma = numero + i;
        
        console.log(suma);
        };
}else{
    for( i=0; i<=iteraciones; i++){

        let suma = numero + i;
        
        console.log(suma);
        };
    };

// While loop

let contador=0;


while(contador != 9){
    contador  = parseInt(prompt("Ingresar el codigo del producto, 1= hamburguesa, 2 = pasta, 3= papa rellena, 4= empanada,  en caso de queres salir escribir 9"));

    switch(contador){
        case 1:
            console.log("Gracias por comprar pasta");
            alert("Gracias por comprar una hamburguesa");
            break;
        case 2:
            console.log("Gracias por comprar pasta");
            alert("Gracias por comprar pasta");
            break;
        case 3:
            console.log("Gracias por comprar pasta");
            alert("Gracias por comprar una papa rellena");
            break;
        case 4:
            console.log("Gracias por comprar pasta");
            alert("Gracias por comprar una empanada");
            break;
        case 9:
            alert("Gracias por tu compra")
            break;
        default:
            console.log("Gracias por comprar pasta");
            alert("no existe la opciòn que marcaste");
            break;

    };
   
};

