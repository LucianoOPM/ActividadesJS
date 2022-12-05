let impuesto=(precio, porcentaje)=>{
    let division = porcentaje/100
    let impuesto = precio * division
    let suma = precio + impuesto

    return suma
}

let valores;
let IVA;
let datos;
for(let i = 1; i<=5; i+=1){
    valores = Number(prompt("Ingrese el precio"))
    IVA = Number(prompt("Ingrese el valor añadido"))

    datos = impuesto(valores, IVA)
    console.log(datos)
}