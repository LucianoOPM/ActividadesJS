let redondeo = (num)=>{
    console.log(Math.round(num))
}

for(let i = 1; i<= 5;i+=1){
    let peticion = Number(prompt("Ingrese su numero decimal a redondear"))
    redondeo(peticion)
}