'use strict';

// se crea un nuevo objeto anónimo a partir de una clase anónima
// dicho objeto define la gestión de personal, utilizando el componente 'Tabulator' (http://tabulator.info/)

new class Nosotros {

    constructor() { 
        
        let carrusel = document.querySelectorAll('.carousel');
        carrusel = M.Carousel.init(carrusel);
             
    }    
}