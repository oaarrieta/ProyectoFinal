
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}

// Devolver la lista de categorias almacenadas 
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Devolver la lista de banners almacenadas 
function  obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}

// Devolver la lista de productos
function  obtenerProductos(categoria = "todos") {
    const map = obtenerMap("productos");
    // return map.values();
    let productos = [];
    if (categoria == null || categoria === "todos") {
        productos = map.values();
    } else {
        productos = map.values().filter(prod => prod.categoria === categoria);
    }
    return productos;
}

// Funciones para la manipulacion del carrito de compras
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = ""; // Limpiar el contenido del carrito
    let precio = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.className = 'list-group-item d-flex justify-content-between mb-2';
        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
            <div class="row">
                <h6 class="my-0">${producto.nombre}</h6>
                <small>${producto.descripcion}</small>
            </div>
            <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarCurso(${index})" >
                <i class="fa fa-times"></i>
            </a>
        </div>`;

    carritoContainer.appendChild(li);
    precio += producto.precio * producto.cantidad;
});
const total = document.getElementById("total");
total.innerHTML = precio.toFixed(2);
}

// agregar un producto al carrito
function agregarProducto(producto) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// eliminar un producto del carrito
function eliminarProducto(index) {
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// vaciar el carrito
function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}