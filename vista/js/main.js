'use strict';

import * as util from './utilidades.js';

window.util = util;

((doc, win) => {

    let menuResponsive;
    let instancia_dropwdown;
    // cada clave de las propiedades de este objeto, está asociada a un elemento de lista en menu.html y
    // cada valor asociado a una clave corresponde a una página que debe cargarse o a una función que 
    // debe ejecutarse en las instrucciones de la función util.gestionarOpciones()
    let opciones = {
        'menu-ir-a-inicio': () => window.location.href = 'index.html',
        'menu-nosotros': './vista/html/nosotros.html',
        'menu-inicio': './vista/html/inicio.html',
        'menu-servicios': './vista/html/servicios.html',
        'menu-contacto': './vista/html/contacto.html',
        'menu-privacidad': './vista/html/privacidad.html',
    }

    doc.addEventListener('DOMContentLoaded', event => {

        $('#index-menu').cargar('./vista/html/menu.html', (contenedor) => {
            let elementosMenu = $('#menu-principal');
            let elementosMenuResponsive = $('#menu-responsive');
            let elementosFooter = $('#menu-encuentranos');
            let elementosServicios = $('#lista-servicios');
            let dropdowns = $('#dropdowns');

            instancia_dropwdown = M.Dropdown.init(dropdowns, { hover: true });
            menuResponsive = M.Sidenav.init(elementosMenuResponsive);

            util.gestionarOpciones(opciones, 'menu-inicio');

            elementosMenuResponsive.addEventListener('click', (e) => {
                // obtener el enlace y el ID del enlace
                let enlace = e.target;
                let idEnlace = enlace.getAttribute('id');
                // si efectivamente es un enlace y tiene nombre ejecutar algo...
                if (enlace.nodeName.toLowerCase() === 'a' && idEnlace) {
                    util.gestionarOpciones(opciones, idEnlace);
                }
                e.preventDefault();
            }, false);

            elementosMenu.addEventListener('click', (e) => {
                // obtener el enlace y el ID del enlace
                let enlace = e.target;
                let idEnlace = enlace.getAttribute('id');
                // si efectivamente es un enlace y tiene nombre ejecutar algo...
                if (enlace.nodeName.toLowerCase() === 'a' && idEnlace) {
                    util.gestionarOpciones(opciones, idEnlace);
                }
                e.preventDefault();
            }, false);

            elementosFooter.addEventListener('click', (e) => {
                // obtener el enlace y el ID del enlace
                let enlace = e.target;
                let idEnlace = enlace.getAttribute('id');
                // si efectivamente es un enlace y tiene nombre ejecutar algo...
                if (enlace.nodeName.toLowerCase() === 'a' && idEnlace) {
                    util.gestionarOpciones(opciones, idEnlace);
                }
                e.preventDefault();
            }, false);

            elementosServicios.addEventListener('click', (e) => {
                // obtener el enlace y el ID del enlace
                let enlace = e.target;
                let idEnlace = enlace.getAttribute('id');
                // si efectivamente es un enlace y tiene nombre ejecutar algo...
                if (enlace.nodeName.toLowerCase() === 'a' && idEnlace) {
                    util.gestionarOpciones(opciones, idEnlace);
                }
                e.preventDefault();
            }, false);

        });

    });

})(document, window);