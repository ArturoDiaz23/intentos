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



// async function cargarData() {
//     const response = await fetch('../src/json/data.json');
//     data = await response.json();

//     //validarUrl(data.urls);

//     data.urls.forEach(element => {
//         const listItem = document.createElement('md-list-item');
//         const separador = document.createElement('md-divider');
//         listItem.innerHTML = `
//             <a href="${element.url}" target="_blank">${element.url} </a>
//             <img slot="start" style="width: 56px" src="${element.image}">
//         `;
//         list.appendChild(listItem);
//         list.appendChild(separador);
//     });
// }

/** Validar Url */

document.addEventListener('DOMContentLoaded', () => {
    cargarData();
});

const cargarData = async () => {
    try {
        const response = await fetch('../src/json/data.json');
        const data = await response.json();
        //console.log(data);
        List(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const List = data => {

    data.urls.forEach(element => {
        //console.log(element);
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
}


/** Abrir el modal */
btn_add.addEventListener('click', () => {
    dialog_url.show();
});

/** Agregar eveto btn para insertar Url */
btn_guardar.addEventListener('click', (e) => {
    e.preventDefault();
    if (id_Url.value === '') {
        msn.innerHTML = 'Debe ingresar una Url';
    }
    else {
        msn.innerHTML = 'Ya existe en la Lista';
    }
});

/** Cerrar el modal */
btn_close.addEventListener('click', () => {
    dialog_url.close();
    msn.innerHTML = '';
    id_Url.value = '';
});

