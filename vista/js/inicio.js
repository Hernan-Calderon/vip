'use strict';

// se crea un nuevo objeto anónimo a partir de una clase anónima
// dicho objeto define la gestión de personal, utilizando el componente 'Tabulator' (http://tabulator.info/)

new class Inicio {

    constructor() { 
        
        let sliderInicio = document.querySelectorAll('.slider');
        sliderInicio = M.Slider.init(sliderInicio, { height: 600, interval: 2000 });
             
    }    
}