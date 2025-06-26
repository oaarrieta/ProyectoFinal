
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Equipos y accesorios",
            descripcion: "", imagen: "img/cat101.png" },
    "102" : { codigo: "102", nombre: "Audio", 
            descripcion: "", imagen: "img/cat102.jpeg" },
    "103" : { codigo: "103", nombre: "Video", 
            descripcion: "", imagen: "img/cat103.jpeg" },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

banners = {
    "101" : { codigo: "101", titulo: "Componentes electronicos", subtitulo: "", 
            descripcion: "Si deseas poner en practica tus conocimientos en electronica y quieres relaizar tus propios proyectos, aqui encontraras lo mejor", imagen: "img/cat101.png" },
    "102" : { codigo: "102", titulo: "Componentes y accesorios para audio", subtitulo: "",
            descripcion: "Consigue con nosotros acesoria y los mejores componetes para tus sistemas de audio", imagen: "img/cat102.jpeg" },
    "103" : { nombre: "103", titulo: "Equipos y accesorios para video", subtitulo: "",
            descripcion: "Consigue con nosotros los mejores equipos y accesorios", imagen: "img/cat103.jpeg" },
};

localStorage.setItem("banners", JSON.stringify(banners));

productos = {
    "1011": {codigo: "1011", nombre: "Transistores", descripcion: "PNP, NPN", categoria: "101", imagen: "img/prod110.jpeg", precio : 10000, clasificacion : 4.5 },

    "1012": {codigo: "1012", nombre: "Etapas de potencia para tus amplificadores", descripcion: "Selecciona la tarjerta que mas se ajuste a tu proyecto",
            categoria: "102", imagen: "img/prod120.jpeg", precio : 12000, clasificacion : 4.0 },

    "1020": {codigo: "1020", nombre: "Equipos de reproducion para videos", descripcion: "Encuentra tus elementos y componentes necesario para reapoducir tus videos en todo tipo de ambientes",
            categoria: "103", imagen: "img/prod130.jpeg", precio : 60000, clasificacion : 4.8 },

};

localStorage.setItem("productos", JSON.stringify(productos));
