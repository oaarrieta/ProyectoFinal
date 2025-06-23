
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Componnetes para tus proyectos de electronica",
            descrpcion: "", 
            imagen: "img/cat101.jpg" },
    "102" : { codigo: "102", nombre: "Proyectos de audio", 
            descrpcion: "", 
            imagen: "img/cat102.jpg" },
    "103" : { nombre: "102", nombre: "Video", 
            descrpcion: "", imagen: "img/cat103.jpeg"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

banners = {
    "101" : { codigo: "101", titulo: "Componnetes electronicos", subtitulo: "", 
            descrpcion: "Si deseas poner en practica tus conocimientos en electronica y quieres relaizar tus propios proyectos, aqui encontraras lo mejor", imagen: "img/cat101.jpg" },
    "102" : { codigo: "102", titulo: "Componentes y accesorios para audio", subtitulo: "",
            descrpcion: "Consigue con nosotros acesoria y los mejores componetes para tus sistemas de audio", imagen: "img/cat102.jpg" },
    "103" : { nombre: "102", titulo: "Equipos y accesorios para video", subtitulo: "",
            descrpcion: "Consigue con nosotros los mejores equipos y accesorios", imagen: "img/cat103.jpeg" },
};

localStorage.setItem("banners", JSON.stringify(banners));
