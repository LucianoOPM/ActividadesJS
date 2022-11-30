let peticion = Number(prompt("Determine los numeros a iterar"))

for(let i = 1; i<=peticion; i+=1){
    if(i>4){
        break
    }else{
        alert(`lado ${i}`)
    }
}