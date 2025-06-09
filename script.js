function validarUsuario() {
    const usuarioCorrecto = "pedro";
    const contrasenaCorrecta = "336";

    let usuarioIngresado = document.getElementById("usuario").value;
    let contrasenaIngresada = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");

    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
        window.location.href = "libreria.html";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";
    }
}

let carrito = {};

function agregarAlCarrito() {
    let libroSeleccionado = document.getElementById("libro").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
     

  

    if (carrito[libroSeleccionado]) {
        carrito[libroSeleccionado] += cantidad;
    } else {
        carrito[libroSeleccionado] = cantidad;
    }

    document.getElementById("resultado").textContent = "Libro agregado al carrito.";
}

function comprar() {
    let total = 0;
    let precios = {
        "harry": 16000,
        "dune": 21000,
        "lotr": 30000,
        "fantasma": 18000,
        "frankenstein": 17000
    };

    for (let libro in carrito) {
        total += carrito[libro] * precios[libro];
    }

    document.getElementById("resultado").textContent = `Total a pagar: $${total}`;
}