const elementoNombre = document.getElementById('nombre');
const elementoAutor = document.querySelector('#autor'); 
const elementoDificultad = document.querySelector('#dificultad')
const elementoTiempoPreparacion = document.querySelector('#tiempo-preparacion');
const elementoIngredientes = document.querySelector('#ingredientes');
const elementoProcedimiento= document.querySelector('#procedimiento');
const elementoTipoComida= document.getElementById('tipo-comida');
const elementoBoton = document.querySelector('#btn-agregar-receta');

elementoBoton.addEventListener('click', agregarReceta);
  
const recetasListaDesayuno = obtenerDeStorageDesayuno()
for(receta of recetasListaDesayuno){
    agregarALista(receta,"desayuno-meriendas")
}

const recetasListaAlmuerzo = obtenerDeStorageAlmuerzo()
    for(receta of recetasListaAlmuerzo){
        agregarALista(receta, "almuerzos-cenas")
}



const recetasListaPostre = obtenerDeStoragePostre()
for(receta of recetasListaPostre){
    agregarALista(receta, "postres")
}     



function agregarReceta() {
    const recetaAgregar = recetas();
        if(nombreVacio() != 0 && autorVacio() != 0 && dificultadVacio() != 0 && tiempoPreparacionVacio() != 0 && ingredientesVacio() != 0 && procedimientoVacio() != 0 ){
        agregarALista(recetaAgregar);
        agregarAStoragePostre(recetaAgregar)
        agregarAStorageDesayuno(recetaAgregar)
        agregarAStorageAlmuerzo(recetaAgregar)
        vaciarCampos();
        }
}


function agregarAStorageDesayuno(receta) {
    const recetasListaDesayuno = obtenerDeStorageDesayuno()
    if(elementoTipoComida.value === "desayuno-meriendas") {
        recetasListaDesayuno.push(receta)
        localStorage.setItem('listaDeRecetasDesayuno', JSON.stringify(recetasListaDesayuno))
    }
}

function agregarAStorageAlmuerzo(receta) {
    const recetasListaAlmuerzo = obtenerDeStorageAlmuerzo()
    if(elementoTipoComida.value === "almuerzos-cenas") {
        recetasListaAlmuerzo.push(receta)
        localStorage.setItem('listaDeRecetasAlmuerzo', JSON.stringify(recetasListaAlmuerzo))
    }
}

function agregarAStoragePostre(receta) {
    const recetasListaPostre = obtenerDeStoragePostre()
    if(elementoTipoComida.value == "postres") {
        recetasListaPostre.push(receta)
        localStorage.setItem('listaDeRecetasPostre', JSON.stringify(recetasListaPostre))
    }        
}

function obtenerDeStorageDesayuno() {
    let recetasListaDesayuno = localStorage.getItem('listaDeRecetasDesayuno')
    if (recetasListaDesayuno === null) {
        return []
    }
    return JSON.parse(recetasListaDesayuno)
}

function obtenerDeStorageAlmuerzo() {
    let recetasListaAlmuerzo = localStorage.getItem('listaDeRecetasAlmuerzo')
    if (recetasListaAlmuerzo === null) {
        return []
    }
    return JSON.parse(recetasListaAlmuerzo)
}

function obtenerDeStoragePostre() {
    let recetasListaPostre = localStorage.getItem('listaDeRecetasPostre')
    if (recetasListaPostre === null) {
        return []
    }
    return JSON.parse(recetasListaPostre)
}

function recetas() {
    const receta = {
        nombre: elementoNombre.value,
        autor: elementoAutor.value,
        dificultad: elementoDificultad.value,
        tiempoPreparacion: elementoTiempoPreparacion.value,
        ingredientes: elementoIngredientes.value,
        procedimiento: elementoProcedimiento.value,
        tipoComida: elementoTipoComida.value
    }
    return receta
}
function vaciarCampoNombre() {
    elementoNombre.value = '';
}
function vaciarCampoAutor() {
    elementoAutor.value = '';
}
function vaciarCampoDificultad() {
    elementoDificultad.value = '';
}
function vaciarCampoTiempoPreparacion() {
    elementoTiempoPreparacion.value = '';
}
function vaciarCampoIngredientes() {
    elementoIngredientes.value = '';
}
function vaciarCampoProcedimiento() {
    elementoProcedimiento.value = ''; 
}
function vaciarCampos() {
    vaciarCampoNombre();
    vaciarCampoAutor();
    vaciarCampoDificultad();
    vaciarCampoTiempoPreparacion();
    vaciarCampoIngredientes();
    vaciarCampoProcedimiento();
}
function nombreVacio() {
    return elementoNombre.value.length
}
function autorVacio() {
    return elementoAutor.value.length
}
function dificultadVacio() {
    return elementoDificultad.value.length
}
function tiempoPreparacionVacio() {
    return elementoTiempoPreparacion.value.length
}
function ingredientesVacio() {
    return elementoIngredientes.value.length
}
function procedimientoVacio() {
    return elementoProcedimiento.value.length
}


function agregarALista(receta, tipoReceta) {
    const elementoNuevoDesayuno1 = document.createElement('p');
    const elementoNuevoDesayuno2 = document.createElement('p')
    const elementoNuevoAlmuerzo1 = document.createElement('p');
    const elementoNuevoAlmuerzo2 = document.createElement('p')
    const elementoNuevoPostre1 = document.createElement('p');
    const elementoNuevoPostre2 = document.createElement('p')
    const elementoIngredientesDesayuno = crearIngredientesDesayuno(receta.ingredientes);
    const elementoIngredientesAlmuerzo = crearIngredientesAlmuerzo(receta.ingredientes);
    const elementoIngredientesPostre = crearIngredientesPostre(receta.ingredientes);
    elementoNuevoDesayuno1.innerHTML = `<span class="desayunos-meriendas-nombre">${receta.nombre} by </span><span class="desayunos-meriendas-autor">${receta.autor}</span><br/><span class="desayunos-meriendas-dificultad">${receta.dificultad}</span>, <span class="desayunos-meriendas-tiempo-preparacion">${receta.tiempoPreparacion}</span><br/><span class="desayunos-meriendas-ingredientes-palabra">Ingredientes:</span>`
    elementoNuevoDesayuno2.innerHTML = `<span class="desayunos-meriendas-procedimiento-palabra">Procedimiento:</span><span class="desayunos-meriendas-procedimiento">${receta.procedimiento}</span></br><span class="desayunos-meriendas-linea-separa-recetas"><br/><hr><br/></span>`;
    elementoNuevoAlmuerzo1.innerHTML = `<span class="almuerzos-cenas-nombre">${receta.nombre} by </span><span class="almuerzos-cenas-autor">${receta.autor}</span><br/><span class="almuerzos-cenas-dificultad">${receta.dificultad}</span>, <span class="almuerzos-cenas-tiempo-preparacion">${receta.tiempoPreparacion}</span><br/><span class="almuerzos-cenas-ingredientes-palabra">Ingredientes:</span>`
    elementoNuevoAlmuerzo2.innerHTML = `<span class="almuerzos-cenas-procedimiento-palabra">Procedimiento:</span><span class="almuerzos-cenas-procedimiento">${receta.procedimiento}</span></br><span class="almuerzos-cenas-linea-separa-recetas"><br/><hr><br/></span>`;
    elementoNuevoPostre1.innerHTML = `<span class="postres-nombre">${receta.nombre} by </span><span class="postres-autor">${receta.autor}</span><br/><span class="postres-dificultad">${receta.dificultad}</span>, <span class="postres-tiempo-preparacion">${receta.tiempoPreparacion}</span><br/><span class="postres-ingredientes-palabra">Ingredientes:</span>`
    elementoNuevoPostre2.innerHTML = `<span class="postres-procedimiento-palabra">Proccedimiento:</span><span class="postres-procedimiento">${receta.procedimiento}</span></br><span class="postres-linea-separa-recetas"><br/><hr><br/></span>`;
    tipoReceta = tipoReceta ? tipoReceta: elementoTipoComida.value    
    if (tipoReceta == "desayuno-meriendas") {
            document.getElementById('lista-desayunos-meriendas').appendChild(elementoNuevoDesayuno1);
            document.getElementById('lista-desayunos-meriendas').appendChild(elementoIngredientesDesayuno)
            document.getElementById('lista-desayunos-meriendas').appendChild(elementoNuevoDesayuno2);
        }else if (tipoReceta == "almuerzos-cenas") {
            document.getElementById('lista-almuerzos-cenas').appendChild(elementoNuevoAlmuerzo1);
            document.getElementById('lista-almuerzos-cenas').appendChild(elementoIngredientesAlmuerzo);
            document.getElementById('lista-almuerzos-cenas').appendChild(elementoNuevoAlmuerzo2);
        }else if(tipoReceta == "postres") {
            document.getElementById('lista-postres').appendChild(elementoNuevoPostre1);
            document.getElementById('lista-postres').appendChild(elementoIngredientesPostre);
            document.getElementById('lista-postres').appendChild(elementoNuevoPostre2);
        }     
}

function crearIngredientesDesayuno(ingredientes) {
    const elementoIngredientes = crearElementoConClase('ul', 'desayunos-meriendas-ingredientes');
    const arrayIngredientes = ingredientes.split(',');
    for (const ingrediente of arrayIngredientes) {
        const elementoIngrediente = document.createElement('li');
        elementoIngrediente.innerText = ingrediente.trim();
        elementoIngredientes.appendChild(elementoIngrediente);
    }
    return elementoIngredientes;
}

function crearIngredientesAlmuerzo(ingredientes) {
    const elementoIngredientes = crearElementoConClase('ul', 'desayunos-meriendas-ingredientes');
    const arrayIngredientes = ingredientes.split(',');
    for (const ingrediente of arrayIngredientes) {
        const elementoIngrediente = document.createElement('li');
        elementoIngrediente.innerText = ingrediente.trim();
        elementoIngredientes.appendChild(elementoIngrediente);
    }
    return elementoIngredientes;
}

function crearIngredientesPostre(ingredientes) {
    const elementoIngredientes = crearElementoConClase('ul', 'postres-ingredientes');
    const arrayIngredientes = ingredientes.split(',');
    for (const ingrediente of arrayIngredientes) {
        const elementoIngrediente = document.createElement('li');
        elementoIngrediente.innerText = ingrediente.trim();
        elementoIngredientes.appendChild(elementoIngrediente);
    }
    return elementoIngredientes;
}

function crearElementoConClase(etiqueta, clase) {
    const elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    return elemento
}