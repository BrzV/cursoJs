//Crea un objeto contactos que almacene una lista de
//objetos, donde cada objeto represente un contacto con 
//propiedades como nombre, telefono y email.Luego, agrega 
//un nuevo contacto a la lista y muestra en la consola la 
//cantidad total de contactos.

let contactos = {
    lista: [
        { nombre: "Nombre1", telefono: "123456" , email: "correo1@correo.com"},
        { nombre: "Nombre2", telefono: "234567" , email: "correo2@correo.com"}
    ],
    agregarContacto: function(nombre,telefono,email){
        const Contacto = {
            nombre: nombre,
            telefono: telefono,
            email: email
        };
        this.lista.push(Contacto);
    },
    cantidadDeContactos: function(){
        return this.lista.length;
    }
};

console.log("La cantidad inicial de contactos es " + contactos.cantidadDeContactos());

contactos.agregarContacto("Nombre3","345678","correo3@correo.com");

console.log("La cantidad final de contactos es " + contactos.cantidadDeContactos());