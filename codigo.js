const formulario = document.getElementById("formulario")


formulario.addEventListener('submit', (e)=>{


let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let texto = document.getElementById("texto")

    if(nombre.value.length <3 || apellido.value.length < 3){

 texto.innerHTML="Los campos deben contener al menos 3 caracteres"


    } else{
        texto.innerHTML=""
    }


})
