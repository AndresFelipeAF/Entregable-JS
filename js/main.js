// // Persona que ingres a usar la calculadora
let nombre = prompt("Ingresa tu nombre");
let apellido=prompt("Ingres tu apellido");
let codigo=parseInt(prompt("Ingresa tu codigo de estudiante"));


function Persona(nombre,apellido,codigo){
    this.nombre =nombre;
    this.apellido= apellido;
    this.codigo = codigo;

};


let usuario = new Persona (nombre,apellido, codigo);
const personasIngresadas = [
{nombre:"Sebastian",
apellido:"Guerrero",
codigo:110011},
{nombre:"Valentina",
apellido:"Escobar",
codigo:144905}
];
personasIngresadas.push(usuario);

console.log(personasIngresadas)

alert("Hola "+ usuario.nombre + " " + usuario.apellido + " !");

// calculadora

// boton calcular 

const botonCalcular= document.querySelector(".btnCalcular");
const mensajeCalculadora = document.querySelector(".mensajeCalculadora");



// funciones
function operaciones ( n1,n2,simbolo){
    switch(simbolo){
        case "+":
           let  suma = n1 + n2 ;
            console.log(suma);
            mensajeCalculadora.innerText = `El resultado de la suma es ${suma}`;
            break;
        case "-":
            let resta = n1 -n2;
            console.log(resta);
            mensajeCalculadora.innerText = `El resultado de la resta es ${resta}`;
            break;
        case "/":
            let division = n1/n2;
            console.log(division);
            mensajeCalculadora.innerText = `El resultado de la división es ${division}`;
            break;
        case "*":
           let  multiplicar = n1*n2;
            console.log(multiplicar);
            mensajeCalculadora.innerText = `El resultado de la multiplicación es ${multiplicar}`;
            break;
        default:
            alert("Se debe utilizar los simbolos que se encuentran en el cuadro de texto");
            break;
    
    };
   
};

// Evento 
botonCalcular.addEventListener("click",()=>{

   
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
   
    let operacion = document.getElementById("operacion").value;

    if(isNaN(numero1)|| isNaN(numero2)){
        alert("Por favor ingresar numeros")
        
    };
    if ( operacion !== "+" && operacion !== "-"&&  operacion !== "*" &&  operacion !== "/" ){

  
        alert("Por favor ingresar una de las siguientes operaciones que se muestran en el mensaje, recarga la pagina");
    
    };
   
    operaciones(numero1,numero2,operacion);


});

// Boton busqueda Usario 

let botonPersona = document.querySelector(".btnBuscar");

botonPersona.addEventListener("click",()=>{
    let busqueda = prompt("Ingresar nombre para recibir codigo de ingreso del estudiante(Recordar mayuscula)");
    let seEncuentra = personasIngresadas.some((el)=>el.nombre === busqueda);
    let msjePersona = document.querySelector(".codigoEstudiante");
     if(seEncuentra === false ){
        alert("la persona no se encuentra")
     }else{
        let resultadoBusqueda = personasIngresadas.find((el)=>el.nombre===busqueda);
        msjePersona.innerText= (`La persona ${resultadoBusqueda.nombre} ${resultadoBusqueda.apellido} tiene el codigo ${resultadoBusqueda.codigo}`)
     }
    
});

// // modificando html
let btnFinal = document.querySelector(".terminar")
const mensajeDespedida =document.createElement("main");

btnFinal.addEventListener("click",()=>{
    mensajeDespedida.innerHTML="<p>Gracias por usar nuestros servicios</p>"

    document.body.appendChild(mensajeDespedida);
    
    
    const despedida = document.getElementById("msj");
    
    despedida.innerText= `Adios ${usuario.nombre}, vuelve pronto!!`
})







