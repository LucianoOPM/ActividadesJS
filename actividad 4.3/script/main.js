let acumulador = prompt("Ingrese los nombres a guardar, pero no mencione, al innombrable")
let x = ""
do{
    x = x + " " + acumulador
    acumulador = prompt("Ingrese más nombres")

}while(acumulador != "voldemort")

if(acumulador == "voldemort"){
    console.log(x)
}