//Selecciono los elementos del DOM que vamos a usar
const nombreInput = document.getElementById("nombre")
const edadInput = document.getElementById("edad")
const correoInput = document.getElementById("correo")
const form = document.getElementById("formularioUsuario")
const borrarBoton = document.getElementById("borrarStorage")
const infoUsuario = document.getElementById("infoUsuario")

function registrarUsuario(event) {
    event.preventDefault() //Previene el comportamiento por defecto del evento "SUBMIT"

    //Obtener los valores de los inputs
    const nombre = nombreInput.value
    const edad = edadInput.value
    const correo = correoInput.value

    //Crear un objeto con la información del usuario
    const usuario = {
        nombre : nombre,
        edad : edad,
        correo : correo
    }

    //Guardar el objeto en localStorage como una cadena JSON
    localStorage.setItem("usuario", JSON.stringify(usuario))

    //Limpiar los campos de entrada
    nombreInput.value = ""
    edadInput.value = ""
    correoInput.value = ""

    //Mostrar la información actualizada
    desplegarInfoUsuario()
}

function borrarLocal() {
    //Limpiar el localStorage
    localStorage.removeItem("usuario")

    //Actualizar la información mostrada
    desplegarInfoUsuario()
}

function desplegarInfoUsuario() {
    //Obtener la infomación del usario del localStorage
    const usuario = localStorage.getItem("usuario")//La información está almacenada en un formato llamado JSON

    //Si hay información del usuario, mostrarla
    if(usuario){
        const objetoUsuario = JSON.parse(usuario)
        infoUsuario.textContent = `Nombre: ${objetoUsuario.nombre}, Edad, ${objetoUsuario.edad}, Correo ${objetoUsuario.correo}`
    }else{
        infoUsuario.textContent = "No hay información registrada del usuario"
    }
}

form.addEventListener("submit", registrarUsuario)
borrarBoton.addEventListener("click", borrarLocal)

desplegarInfoUsuario()