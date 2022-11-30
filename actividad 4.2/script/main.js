let presupuesto = Number(prompt("Coloque su presupuesto"))


if(presupuesto <= 1000 && presupuesto >= 0){
    alert("Presupuesto bajo")
}else if(presupuesto >= 1001 && presupuesto <= 3000){
    alert("presupuesto medio")
}else{
    alert("presupuesto alto")
}