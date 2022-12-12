class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro = rubro
    }
    esPropietario(dueño){
        if(dueño.toLowerCase() == this.propietario.toLowerCase()){
            console.log(`Si, ${dueño} es propietario de la tienda ${this.nombre}`)
        }else{
            console.log(`No es propietario de la tienda ${this.nombre}`)
        }
    }
}

let tiendaAna = new Tienda("Paula", "Calle 99, #135", "Ana", "Abarrotes")
let tiendaLuci = new Tienda("Luci", "Calle 13, #511", "Luciano", "Sex Shop")
let tiendaFer = new Tienda("Zoro","Calle Zoro, #6969", "Fer", "Figuras de Zoro")


for(let i = 1; i<=5; i+=1){
    let verificar = prompt("Cual es el nombre que quiere verificar para ver si es propietario")

    tiendaAna.esPropietario(verificar)
    tiendaLuci.esPropietario(verificar)
    tiendaFer.esPropietario(verificar)
}