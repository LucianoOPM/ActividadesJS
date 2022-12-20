class Jugador{
    constructor(nombre, numero, edad, lesionado){
        this.nombre = nombre
        this.numero = numero
        this.edad = edad
        this.lesionado = lesionado
    }
}

let jugador1 = new Jugador("Mbappe", 10, 23, false)
let jugador2 = new Jugador("Messi", 10, 30, false)
let jugador3 = new Jugador("Neymar", 16, 25, true)
let jugador4 = new Jugador("Benzema", 99, 24, true)
let jugador5 = new Jugador("Púyol", 50, 30, true)

let furbo = [jugador1, jugador2, jugador3, jugador4, jugador5]

let busquedaEdad=(equipo, edad)=>{

    let buscar = equipo.filter((age)=> age.edad == edad)

    if(buscar == false){
        return "no se encontró un rango de edad parecido"
    }else{
        return buscar
    }
}

let x = busquedaEdad(furbo, Number(prompt("Que edad desea buscar?")))

console.log(x)