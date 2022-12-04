let peticion = prompt("Ingrese un numero")
let productos = ""

while(peticion != "ESC"){
    switch(peticion){
        case "1":
            productos = "Tomate, " + productos
        break
        case "2":
            productos = "Papa, " + productos
        break
        case "3":
            productos = "Carne, " + productos
        break
        case "4":
            productos = "Pollo, " + productos
        break
        default:
            productos = "Valor invalido, " + productos
        break
    }
    peticion = prompt("Ingrese otro valor")
}
console.log(productos)