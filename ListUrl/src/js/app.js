/** Llamado de id home */
let id_Url = document.getElementById('id_Url');
let btn_guardar = document.getElementById('btn_guardar');
let btn_add = document.getElementById('btn_add');
let dialog_url = document.getElementById('dialog_url');
let msn = document.getElementById('msn');


btn_add.addEventListener('click', () => {
    dialog_url.show();
});

btn_guardar.addEventListener('click', (e) => {
    e.preventDefault();
    msn.innerHTML = 'Ya existe en la Lista';
})
