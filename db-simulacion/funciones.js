
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
    if (categoria === "todos") {
        productos = map.values();
    } else {
        productos = map.values().filter(prod => prod.categoria === categoria);
    }
    return productos;
}