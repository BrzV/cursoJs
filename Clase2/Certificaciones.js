//Crea un objeto clase que contenga un array de
//objetos, donde cada objeto represente un estudiante
//con propiedades como nombre y calificaciones, que
//es un array de números.Agrega al menos tres
//estudiantes y muestra en la consola el promedio
//de calificaciones de cada estudiante.

let clase = {
    estudiantes: [
        { nombre: "nombre1", calificaciones: [4,5,6] },
        { nombre: "nombre2", calificaciones: [7,8,9] }
    ],
    agregarEstudiante: function(nombre,calificaciones){
        let Estudiante = {
            nombre: nombre,
            calificaciones: calificaciones
        };
        this.estudiantes.push(Estudiante);
    },
    calcularPromedio: function(calificaciones){
        let sum = 0;
        for (const nota of calificaciones) {
            sum += nota;
        }
        console.log("El promedio es de " + (sum/calificaciones.length));
    }
}

clase.calcularPromedio(clase.estudiantes[1].calificaciones);