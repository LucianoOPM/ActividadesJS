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


let buscarJugador=(equipo, jugador)=>{
    let buscado = equipo.find((player)=>player.nombre == jugador)//Los métodos de array también deben tener un return explicito
    
    if(buscado == undefined){
        return `No se encontró a ${jugador}`
    }else{
        return buscado
    }
}

let x = buscarJugador(furbo, prompt("Jugador que desea buscar"))

console.log(x)