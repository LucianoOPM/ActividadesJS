let array = []

let nombre = prompt("Ingrese el nombre que desea agregar")

while(nombre != null){
    array.push(nombre)
    nombre = prompt("Ingrese el nombre que desea agregar")
}

for(let i = 0; i<array.length; i+=1){
    alert(`El jugador con la posición ${i} es: ${array[i]}`)
}