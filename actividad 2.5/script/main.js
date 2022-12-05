class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro = rubro
    }
}
let instancia = ""
for(let i = 0; i<5; i+=1){
    let tiendita = new Tienda(prompt("Nombre de la tienda"), prompt("dirección de la tienda"), prompt("Propietario de la tienda"), prompt("Rubro de la tienda"))

    instancia += `Tienda: ${tiendita.nombre}, Dirección: ${tiendita.direccion}, Propietario: ${tiendita.propietario}, Rubro: ${tiendita.rubro}. `
}
console.log(instancia)