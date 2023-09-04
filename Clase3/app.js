//Solicitar al usuario que ingrese tres estudiantes con propiedades 
//como nombre y calificaciones, que es un array de números. 
//Agrega al menos tres estudiantes y muestra en la consola el 
//promedio de calificaciones de cada estudiante.
//Esto tiene que hacerse con HTML y Javascript, donde el usuario
//ingrese tres nombres de estudiantes distintos y sus notas correspondientes.
//Cuando termine de ingresar los nombres, el boton se tiene que deshabilitar.
//Hacer las validaciones correspondientes. Hacer un boton reset para volver a empezar

document.addEventListener("DOMContentLoaded", function () {
    const estudiantes = []; // Un arreglo para almacenar los objetos de estudiantes

    const agregarEstudianteBtn = document.getElementById("agregarEstudiante");
    agregarEstudianteBtn.addEventListener("click", agregarEstudiante);

    const calcularPromediosBtn = document.getElementById("calcularPromedios");
    calcularPromediosBtn.addEventListener("click", calcularPromedios);

    const reiniciarBtn = document.getElementById("reiniciar");
    reiniciarBtn.addEventListener("click", reiniciar);

    function Estudiante(nombre,calificaciones){
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    function agregarEstudiante() {
        // Obtener los datos ingresados por el usuario
        const nombre = document.getElementById("nombre").value;
        const calificaciones = document.getElementById("calificaciones").value.split(',').map(Number);

        // Validar que se ingresen calificaciones válidas
        if (nombre.trim() === "" || calificaciones.some(isNaN)) {//trim elimina espacios en blanco, some verficica si existen valores en un array
            document.getElementById("alertas").innerHTML = "<h4>Por favor, ingrese un nombre y calificaciones válidas.</h3>";
            return;
        }

        // Crear objeto de estudiante y agregarlo al arreglo "estudiantes"
        const estudiante = new Estudiante(nombre,calificaciones);
        estudiantes.push(estudiante);

        // Limpiar los campos después de agregar un estudiante
        document.getElementById("nombre").value = "";
        document.getElementById("calificaciones").value = "";

        if(estudiantes.length == 3){
            agregarEstudianteBtn.disabled = true;
        }
    }

    function calcularPromedios() {
        // Verificar que se hayan ingresado al menos tres estudiantes
        if (estudiantes.length < 3) {
            document.getElementById("alertas").innerHTML = "<h4>Debe ingresar al menos tres estudiantes para calcular los promedios.</h3>";
            return;
        }

        // Calcular el promedio de calificaciones de cada estudiante
        const promedios = estudiantes.map(calcularPromedio);//le aplica calcularPromedio a cada elemento del objeto, solo me interesa en calificaciones

        // Mostrar los resultados en la página
        const resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "";

        for (let i = 0; i < estudiantes.length; i++) {
            resultadosDiv.innerHTML += `<p>${estudiantes[i].nombre} - Promedio de Calificaciones: ${promedios[i]}</p>`;
        }

        // Deshabilitar el botón de calcular promedios
        calcularPromediosBtn.disabled = true;
    }

    function calcularPromedio(estudiante) {
        const suma = estudiante.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
        return suma / estudiante.calificaciones.length;
    }

    function reiniciar(){
        while(estudiantes.length > 0){
            estudiantes.pop();
        }
        document.getElementById("alertas").innerHTML = "";
        document.getElementById("resultados").innerHTML = "";

        agregarEstudianteBtn.disabled = false;
        calcularPromediosBtn.disabled = false;
    }
});