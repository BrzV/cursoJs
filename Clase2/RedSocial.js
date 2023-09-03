//Crea un objeto perfil que almacene propiedades
//como nombre, edad y amigos, que es un array de
//objetos donde cada objeto representa un amigo con
//propiedades como nombre y edad.Agrega al menos tres
//amigos y muestra en la consola el nombre del amigo más joven.

let perfil = {
    nombre: "nombre",
    edad: 24,
    amigos: [
        { nombre: "Amigo1", edad: 21 },
        { nombre: "Amigo2", edad: 12 },
        { nombre: "Amigo3", edad: 17 }
    ],
}

let amigoJoven = perfil.amigos[0];
/*
for(let i = 0 ; i < perfil.amigos.length ; i++){
    if (amigoJoven.edad > perfil.amigos[i].edad ){
        amigoJoven = perfil.amigos[i]
    }
}
*/
for(const amigo of perfil.amigos){
    if (amigoJoven.edad > amigo.edad ){
        amigoJoven = amigo;
    }
}


console.log("El amigo más joven es " + amigoJoven.nombre);