class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro = rubro
    }

    estaAbierto(hora){
        if(hora > 8 && hora < 12){
            return true
        }else if(hora > 15 && hora < 19){
            return true
        }else{
            return false
        }
    }
}

let tiendita = new Tienda("Oxxo", "Calle 13", "Ana", "Abarrotes")
let horario;

for(let i = 0; i<3; i+=1){
    horario = tiendita.estaAbierto(Number(prompt("Ingrese una hora a revisar")))
    console.log(horario)
}