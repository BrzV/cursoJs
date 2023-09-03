//Crea un objeto usuario con propiedades como nombre y
//peliculasFavoritas, que es un array de objetos donde
//cada objeto representa una película con propiedades como
//titulo y año.Agrega al menos tres películas favoritas y
//muestra en la consola el título de la segunda película favorita.

let usuario = {
    nombre: "Juan",
    peliculasFavoritas: [
        { titulo: "Pelicula1", año: 2011 },
        { titulo: "Pelicula2", año: 2012 },
        { titulo: "Pelicula3", año: 2013 }
    ]
};

console.log("El título de la segunda película favorita de " + usuario.nombre + " es " + usuario.peliculasFavoritas[1].titulo)