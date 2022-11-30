let producto1 = prompt("Ingrese su producto 1")
let producto2 = prompt("Ingrese su producto 2")
let producto3 = prompt("Ingrese su producto 3")
let producto4 = prompt("Ingrese su producto 4")


if(producto1== null && producto2== null && producto3 == null && producto4 == null){
    alert("ERROR: Es necesario cargar todos los productos")
}else{
    alert(`Sus productos son: ${producto1}, ${producto2},${producto3},${producto4}`)
}