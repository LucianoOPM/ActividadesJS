let salida=(valor)=>{
    alert(valor)
}

let procesamiento=(valor)=>{
    let x = `La entrada es: ${valor}`
    salida(x)
}

let entrada = ()=>{
    let peticion = prompt("Escriba el valor que desea procesar")

    procesamiento(peticion)
}
entrada()