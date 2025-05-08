// Datos de ejemplo de productos (simulando que los productos son subidos por vendedores)
const productos = [
    { nombre: "Curso de Programación", precio: "$20", imagen: "images/curso.jpg" },
    { nombre: "E-book de Diseño Gráfico", precio: "$10", imagen: "images/ebook.jpg" },
    { nombre: "Membresía Mensual", precio: "$5/mes", imagen: "images/membresia.jpg" }
];

// Función para mostrar productos
function mostrarProductos() {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
        `;
        contenedor.appendChild(div);
    });
}

// Llamar a la función para mostrar los productos
mostrarProductos();
// Función para manejar el registro de usuario
document.getElementById("formRegistro").addEventListener("submit", function (e) {
    e.preventDefault();  // Evita el comportamiento por defecto del formulario (recargar la página)

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById("confirmarContraseña").value;

    // Verificar si las contraseñas coinciden
    if (contraseña !== confirmarContraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear un objeto de usuario
    const usuario = {
        nombre: nombre,
        email: email,
        contraseña: contraseña
    };

    // Guardar el usuario en el localStorage
    localStorage.setItem(email, JSON.stringify(usuario));  // Guardamos el usuario con su email como clave

    // Mostrar mensaje de éxito
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

    // Redirigir al inicio de sesión
    window.location.href = "login.html";
});
// Función para manejar el inicio de sesión de usuario
document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();  // Evita el comportamiento por defecto del formulario (recargar la página)

    // Obtener los valores del formulario
    const emailLogin = document.getElementById("emailLogin").value;
    const contraseñaLogin = document.getElementById("contraseñaLogin").value;

    // Verificar si el usuario existe
    const usuarioGuardado = localStorage.getItem(emailLogin);
    if (!usuarioGuardado) {
        alert("El usuario no existe.");
        return;
    }

    // Convertir el usuario guardado de JSON a objeto
    const usuario = JSON.parse(usuarioGuardado);

    // Verificar si la contraseña es correcta
    if (usuario.contraseña !== contraseñaLogin) {
        alert("Contraseña incorrecta.");
        return;
    }

    // Mostrar mensaje de éxito
    alert("¡Bienvenido, " + usuario.nombre + "!");
});
