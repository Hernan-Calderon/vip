'use strict';

// se crea un nuevo objeto anónimo a partir de una clase anónima
// dicho objeto define la gestión de personal, utilizando el componente 'Tabulator' (http://tabulator.info/)

new class Contacto {

    constructor() {

        let sliderContacto = document.querySelectorAll('.slider');
        sliderContacto = M.Slider.init(sliderContacto, { indicators:false, height: 330, interval: 2000 });

    }
}