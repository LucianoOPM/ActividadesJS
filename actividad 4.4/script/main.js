let dolarAPeso=(dolar)=>{
    let divisa = dolar * 19.39
    return divisa
}
let pesoADolar=(peso)=>{
    let divisa = peso / 19.39
    return divisa
}


let dinero = Number(prompt("¿Cuanto quiere convertir?"))

let moneda = Number(prompt("Seleccione '1' si quiere pasar sus pesos a dolares o '2' Si quiere pasar los dolares a pesos"))

switch(moneda){
    case 1:
        let cotizacion = pesoADolar(dinero)
        console.log(cotizacion.toFixed(2))
    break
    case 2:
        let cotizacion2 = dolarAPeso(dinero.toFixed(2))
        console.log(cotizacion2)
    break
}