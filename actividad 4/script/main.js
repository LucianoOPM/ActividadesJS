let precio = Number(prompt("¿Cuál es el precio que quiere calcular?"))
let descuento = Number(prompt("¿Cuál es el valor del descuento?"))

let division = descuento / 100
let descontar = precio * division
let total = precio - descontar

alert(`Su descuento es de ${division}, se está ahorrando ${descontar}, y el total de su producto ya con descuento es de: ${total}`)