const buttonI = document.querySelector(".buttonInput");
const alert1 = document.querySelector(".alert");
// función crear persona

function Persona(nombre, apellido, codigo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;
};
// lista de personas
const personasIngresadas = [
    {
        nombre: "Sebastian",
        apellido: "Guerrero",
        codigo: 110011
    },
    {
        nombre: "Valentina",
        apellido: "Escobar",
        codigo: 144905
    },
    {
        nombre: "Daniela",
        apellido: "Velazco",
        codigo: 12341
    }
];
// Evento ingreso 
buttonI.addEventListener("click", () => {
    const nombreI = document.querySelector(".nombreInput").value;
    const apellidoI = document.querySelector(".apellidoInput").value;

    if (nombreI === "" || apellidoI === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'ingresar un valor correcto',
        })
    } else {
        let codigo = "1122" + nombreI[0] + apellidoI[0];
        let usuario = new Persona(nombreI, apellidoI, codigo);
        console.log(usuario);
        // Agregar usuario a array
        personasIngresadas.push(usuario);
        // stringify
        const personaIJSON = JSON.stringify(personasIngresadas);
        const usuarioJson = JSON.stringify(usuario);
        // Local storage


        localStorage.setItem("personaIngresadas", personaIJSON);
        localStorage.setItem("usuarioJson", usuarioJson);

        console.log(personasIngresadas);
        // alerta de bienvenida del usuario 

        let { nombre, apellido } = usuario;
        Toastify({
            text: "Hola " + nombre + " " + apellido + " !",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    };
});
// calculadora
// boton calcular 

const botonCalcular = document.querySelector(".btnCalcular");
const mensajeCalculadora = document.querySelector(".mensajeCalculadora");

// funciones
function operaciones(n1, n2, simbolo) {
    switch (simbolo) {
        case "+":
            let suma = n1 + n2;
            console.log(suma);
            mensajeCalculadora.innerText = `El resultado de la suma es ${suma}`;
            break;
        case "-":
            let resta = n1 - n2;
            console.log(resta);
            mensajeCalculadora.innerText = `El resultado de la resta es ${resta}`;
            break;
        case "/":
            let division = n1 / n2;
            console.log(division);
            mensajeCalculadora.innerText = `El resultado de la división es ${division}`;
            break;
        case "*":
            let multiplicar = n1 * n2;
            console.log(multiplicar);
            mensajeCalculadora.innerText = `El resultado de la multiplicación es ${multiplicar}`;
            break;
        default:
            break;
    };
};
// Evento 
botonCalcular.addEventListener("click", () => {

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.querySelector("#numero2").value);
    const operacion = document.getElementById("operacion").value;

    // Operación AND

    (operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/") && Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '"Por favor ingresar una de las siguientes operaciones (+,-,/ y *)"',
    });

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingresar numeros',
        })
    } else {
        operaciones(numero1, numero2, operacion);

        setTimeout(() => {
            mensajeCalculadora.innerText = "";
        }, 4000)
    };
});

// Boton busqueda Usuario 

const botonPersona = document.querySelector(".btnBuscar");

botonPersona.addEventListener("click", () => {
    const busqueda = prompt("Ingresar nombre para recibir codigo de ingreso del estudiante(Recordar mayuscula)");
    const seEncuentra = personasIngresadas.some((el) => el.nombre === busqueda);
    const msjePersona = document.querySelector(".codigoEstudiante");
    const { nombre, apellido, codigo } = personasIngresadas.find((person) => person.nombre === busqueda);
    // operación ternaria 
    seEncuentra === true ?  msjePersona.innerText = (`La persona ${nombre} ${apellido} tiene el codigo ${codigo}`): Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario no se encuentra',
    });

    setTimeout(() => {
        msjePersona.innerText = "";
    }, 4000)
});
// modificando html
const btnFinal = document.querySelector(".terminar")

btnFinal.addEventListener("click", () => {

    const usuarioPrueba = JSON.parse(window.localStorage.getItem("usuarioJson"));
    console.log(usuarioPrueba);
    const despedida = document.getElementById("msj");

    let { nombre } = usuarioPrueba;
    despedida.innerText = `Adios ${nombre}, vuelve pronto!!`
    setTimeout(() => {
        despedida.innerText = "";
    }, 5000)
});

const titulo = document.querySelector(".fetch");
const lista = document.querySelector(".listaUL");
const btnLista = document.querySelector(".lista");
console.log(btnLista);

// Fetch and promises

btnLista.addEventListener("click", async () => {

    try {
        const response = await fetch("./data/gradoA.json");
        const peopleArray = await response.json();
        lista.innerHTML = '<h2 class="tituloColegio">Lista Colegio Hispanoamericano</h2>';

        peopleArray.forEach((person) => {
            const { nombre, apellido, codigo } = person
            const li = document.createElement("li");
            li.innerHTML = `
            <li class="listaNombres">
            <p> ${nombre} ${apellido} Código: ${codigo}
            </li>`
            lista.append(li);
        });

        setTimeout(() => {
            lista.innerHTML = "";
        }, 10000)
    } catch (error) {
        //pinta rojo
        console.error(error);
        // pinta amarrillo
        console.warn(error);
    }
    // .then(resp => resp.json())
    // .then((data) => {
    //     console.log(data);
    //     let html;
    //     lista.innerHTML = (`<h2 class="tituloColegio">
    //     Lista Colegio Hispanoamericano
    //     </h2>`);
    //     for (const key of data) {
    //         html = `
    //     <li class="listaNombres">
    //     <h1>${key.nombre} ${key.apellido} Codigo = ${key.codigo}</h1>
    //     <li/>
    //     `

    //         lista.innerHTML += html
    //     }
    //     setTimeout(() => {
    //         lista.innerHTML = "";
    //     }, 10000)

    // });
});