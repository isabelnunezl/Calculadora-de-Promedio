let nombreAlumno = prompt("Ingresa el nombre del alumno:");

let nombreMateria = prompt("Ingresa el nombre de la materia:");

let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
    alert("Ingresa notas válidas en el rango de 0 a 10");
    nota1 = parseFloat(prompt("Ingresa la primera nota:"));
}

let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
    alert("Ingresa notas válidas en el rango de 0 a 10");
    nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
}

let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));
while (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
    alert("Ingresa notas válidas en el rango de 0 a 10");
    nota3 = parseFloat(prompt("Ingresa la tercera nota:"));
}

let promedio = (nota1+nota2+nota3)/3;

if (promedio >= 7) {
    console.log(`${nombreAlumno}, ¡Felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}.`);
} else {
    console.log(`${nombreAlumno}, Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`);
}