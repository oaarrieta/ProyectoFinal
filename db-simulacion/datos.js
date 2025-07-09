
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Equipos y accesorios",
            descripcion: "", imagen: "img/cat101.png" },
    "102" : { codigo: "102", nombre: "Audio", 
            descripcion: "", imagen: "img/cat102.png" },
    "103" : { codigo: "103", nombre: "Video", 
            descripcion: "", imagen: "img/cat103.jpeg" }
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
    "1010": {codigo: "1010", nombre: "Transistores", descripcion: "Transistores 2sc5200 y 2sa1943.", categoria: "101", imagen: "img/prod110.jpeg", precio : 10000, 
        clasificacion : 4.5},
    "1011": {codigo: "1011", nombre: "Resistencias", descripcion: "Kit de resistencias DE 230 unidades a 2W.", categoria: "101", imagen: "img/kit-de-resistencias-2w-.jpg", 
        precio : 20000, clasificacion : 4.5},



    "1020": {codigo: "1020", nombre: "Etapa de potencia de alta calidad para tus amplificadores.", descripcion: "300 W",
            categoria: "102", imagen: "img/prod120.jpeg", precio : 12000, clasificacion : 4.0 },

    "1022": { codigo: "1022", nombre: "Transformador toroidal", descripcion: "Transformador toroidal de 1000w para amplificadores de alta potencia.", categoria: "102",
        imagen: "img/transformador-toroidal.jpg", precio : 450000, clasificacion : 5.0 },
       

    "1030": {codigo: "1030", nombre: "Camara de alta calidad de imagen para tu PC", descripcion: "",
            categoria: "103", imagen: "img/prod130.jpeg", precio : 60000, clasificacion : 4.8},

    "1031": {codigo: "1031", nombre: "Divisor de pantalla", descripcion: "Divisor HDMI 4K 30Hz 1x2 HDMI Switch 1 in 2 out Video distribuidor Splitter 1080P Dual Display para TV PC Laptop Monitor proyecto.",
         categoria: "103", imagen: "img/Divisor.jpg", precio : 70000, clasificacion : 4.0},

};

localStorage.setItem("productos", JSON.stringify(productos));
console.log("productos guardados:", localStorage.getItem("productos"));
