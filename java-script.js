//Valoración luego de una experiencia
let mensualidad = 2100
let descuento = 200
//Primera parte
alert("Gracias por elegir FightFit" + "\n" + "Dejanos tu opinión y gana un descuento de $200 en tu proximo mes")


let nombre = prompt("Ingrese Nombre")
alert("Hola " + nombre.trim() + " " + "bienvenid@" + "\n" + "Responde una breve encuesta para ayudarnos a mejorar")

alert("Valora de 1 a 5 los siguientes puntos" + "\n" +
    "Horarios" + "\n" +
    "Actividades" + "\n" +
    "Desempeño del Profesor")

//Segunda parte
let horarios = Number(prompt("Valora nuestros Horarios"))
if (horarios === 1 || horarios === 2 || horarios === 3 || horarios === 4 || horarios === 5){
    alert("Valoracion ingresada, siguiente =>")
} else {
    alert("Valor no permitido"+"\n"+ "Rintenta")
}

//Tercera parte
let actividades = Number(prompt("Valora nuestras Actividades"))
if (actividades === 1 || actividades === 2 || actividades === 3 || actividades === 4 || actividades === 5){
    alert("Valoracion ingresada, siguiente =>")
} else {
    alert("Valor no permitido"+"\n"+ "Rintenta")
}

//Cuarta parte
let profesor = Number(prompt("Valora nuestro Profesor"))
if (profesor === 1 || profesor === 2 || profesor === 3 || profesor === 4 || profesor === 5){
    alert("Valoracion ingresada")
} else {
    alert("Valor no permitido"+"\n"+ "Rintenta")
}

//Final
alert("Valoramos mucho tu opinion para seguir dando el mejor servicio"+"\n"+"Te agradecemos con un descuento para tu proximo mes")
alert(nombre+" "+"Tu proxima mensualidad sera de "+ (mensualidad - descuento))



