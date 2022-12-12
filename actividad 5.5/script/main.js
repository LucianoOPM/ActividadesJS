class Cliente{
    constructor(nombre, presupuesto, tarjeta, telefono){
        this.nombre = nombre
        this.presupuesto = presupuesto
        this.tarjeta = tarjeta
        this.telefono = telefono
    }
    transferirDinero(valor){
        if(valor > 0 && valor <= this.presupuesto){
            return "Si puede realizar la transferencia"
            /* 
            this.presupuesto = this.presupuesto - valor
            return this.presupuesto
            */
        }else{
            return "No el valor no cumple con los requisitos de transferencia"
        }
    }
}

let ana = new Cliente("Ana", 5000, true, 1502)
let fer = new Cliente("Fer", 1500, false, 1515)
let luci = new Cliente("Luciano", 9999, true, 0000)

let client = prompt("Con que cliente quiere revisar su solicitud?")

switch(client.toLowerCase()){
    case "ana":
        for(let i = 1; i<=5; i+=1){
            let solicitud = Number(prompt("Cuanta cantidad desea transferir?"))

            let x = ana.transferirDinero(solicitud)
            alert(x)
        }
    break
    case "fer":
        for(let i = 1; i<=5; i+=1){
            let solicitud = Number(prompt("Cuanta cantidad desea transferir?"))

            let x = fer.transferirDinero(solicitud)
            alert(x)
        }
    break
    case "luciano":
        for(let i = 1; i<=5; i+=1){
            let solicitud = Number(prompt("Cuanta cantidad desea transferir?"))

            let x = luci.transferirDinero(solicitud)
            alert(x)
        }
    break
    default:
        alert("No ingreso al usuario correctamente")
    break

}