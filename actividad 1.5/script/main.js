class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro = rubro
    }
}

let tienda1 = new Tienda("Paquita", "Calle 1, #202, México", "Ana", "Abarrotes")
let tienda2 = new Tienda("Paola", "Calle 2, #303, México", "Luciano", "Alcohol")
let tienda3 = new Tienda("Oxxo", "Calle 3, #101, México", "Oxxo", "Farmacia")

console.log(tienda1)