// // Persona que ingres a usar la calculadora
const nombreP = prompt("Ingresa tu nombre");
const apellidoP=prompt("Ingresa tu apellido");
const codigo=parseInt(prompt("Ingresa tu codigo de estudiante"));


function Persona(nombre,apellido,codigo){
    this.nombre =nombre;
    this.apellido= apellido;
    this.codigo = codigo;

};


let usuario = new Persona (nombreP,apellidoP, codigo);

// stringify
const usuarioJson= JSON.stringify(usuario);
// Local storage
localStorage.setItem("usuario", usuarioJson);

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

let {nombre,apellido} =usuario; 

alert("Hola "+ nombre + " " + apellido + " !");

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

   
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.querySelector("#numero2").value);
   
    const operacion = document.getElementById("operacion").value;



    // Operación AND

        ( operacion !== "+" && operacion !== "-"&&  operacion !== "*" &&  operacion !== "/" )&&
        alert("Por favor ingresar una de las siguientes operaciones que se muestran en el mensaje, recarga la pagina");


     if(isNaN(numero1)|| isNaN(numero2)){
         alert("Por favor ingresar numeros")
         
     }else{
        operaciones(numero1,numero2,operacion);
     };

});

// Boton busqueda Usuario 

const botonPersona = document.querySelector(".btnBuscar");

botonPersona.addEventListener("click",()=>{
    const busqueda = prompt("Ingresar nombre para recibir codigo de ingreso del estudiante(Recordar mayuscula)");
    const seEncuentra = personasIngresadas.some((el)=>el.nombre === busqueda);
    const msjePersona = document.querySelector(".codigoEstudiante");
    const resultadoBusqueda = personasIngresadas.find((el)=>el.nombre===busqueda);
    // operación ternaria 
    seEncuentra === false ? alert("la persona no se encuentra"): msjePersona.innerText= (`La persona ${resultadoBusqueda.nombre} ${resultadoBusqueda.apellido} tiene el codigo ${resultadoBusqueda.codigo}`)

    
});

// modificando html



const btnFinal = document.querySelector(".terminar")
const mensajeDespedida =document.createElement("main");



btnFinal.addEventListener("click",()=>{

    // parse
    const usuarioParse = JSON.parse(usuarioJson);
    // get item storage
    localStorage.getItem(usuarioParse);
    mensajeDespedida.innerHTML="<p>Gracias por usar nuestros servicios</p>"

    document.body.appendChild(mensajeDespedida);
    
    
    const despedida = document.getElementById("msj");
    
    let {nombre}= usuarioParse;
    despedida.innerText= `Adios ${nombre}, vuelve pronto!!`
})







