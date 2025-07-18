import { cargarData } from './fetchJson.js';
import { progress, validarURL } from './progress.js';

const info = await cargarData();

/** Llamado de id home */
let id_Url = document.getElementById('id_Url');
let btn_guardar = document.getElementById('btn_guardar');
let btn_add = document.getElementById('btn_add');
let dialog_url = document.getElementById('dialog_url');
let msn = document.getElementById('msn');
let btn_close = document.getElementById('btn_close');

const list = document.getElementById('list');
const template_list = document.getElementById('template').content;
const fragment = document.createDocumentFragment();

//botones paginacion
let antes = document.getElementById('antes');
let despues = document.getElementById('despues');
let pag = 1;
let offset = 0;
let limit = 8;

let array = info.slice(offset, limit);
let array2 = info;
//console.log(array);


const List = () => {
    list.replaceChildren();
    progress(list);
    setTimeout(() => {
        list.replaceChildren(); // Limpiar el contenido previo de la lista
        array.forEach(element => {
            template_list.querySelector('div').textContent = element.id;
            template_list.querySelector('a').setAttribute('href', element.url);
            template_list.querySelector('a').textContent = element.url;
            template_list.querySelector('img').setAttribute('src', element.image);

            const clone = template_list.cloneNode(true);
            fragment.appendChild(clone);
            // const listItem = document.createElement('md-list-item');
            // const separador = document.createElement('md-divider');
            // listItem.innerHTML = `
            //         <a href="${element.url}" target="_blank">${element.url} </a>
            //         <img slot="start" style="width: 56px" src="${element.image}">
            //     `;
            // list.appendChild(listItem);
            // list.appendChild(separador);
        });
        list.appendChild(fragment);
    }, 400); // Simular un retraso para mostrar el progreso


}

/** Boton antes */
antes.addEventListener('click', () => {
    if (pag > 1) {
        offset -= 8;
        pag--;
        array = info.slice(offset, limit * pag);
        console.log(array);
        List();
    }
});
/** Boton despues */
despues.addEventListener('click', () => {
    offset += 8;
    pag++
    array = info.slice(offset, limit * pag);
    console.log(array);
    List();
});

/** Abrir el modal */
btn_add.addEventListener('click', () => {
    dialog_url.show();
});

/** Agregar eveto btn para insertar Url */
btn_guardar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(id_Url.value);
    if (id_Url.value === '') {
        msn.innerHTML = 'Debe ingresar una Url';
    }
    if (validarURL(array2, id_Url.value) === false) {
        msn.innerHTML = 'Agregando...';
    }
    if (validarURL(array2, id_Url.value) === true){
        msn.innerHTML = 'ya esta en la Lista';
    }
});

/** Cerrar el modal */
btn_close.addEventListener('click', () => {
    dialog_url.close();
    msn.innerHTML = '';
    id_Url.value = '';
});

List();

