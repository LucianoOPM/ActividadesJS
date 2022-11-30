let i = 1
let alumnos = ""
let texto = "Sus alumnos son: "

while(i<10){
    alumnos = prompt("Ingrese los nombres de sus estudiantes")
    i += 1
    texto = texto + " " + alumnos
}

alert(texto)