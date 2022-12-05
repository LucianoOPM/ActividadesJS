let validacion=(text)=>{
    if(text != ""){
        return true
    }else{
        return false
    }
}
let texto = prompt("Ingrese un mensaje a validar")

while(texto != "ESC"){
    texto = prompt("Ingrese el mensaje a validar")
    let textoValidado = validacion(texto)
    console.log(textoValidado)
}