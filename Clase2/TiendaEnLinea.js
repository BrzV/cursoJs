//Crea un objeto producto con propiedades como nombre,
//precio y disponible.Luego, crea una función llamada
//mostrarProducto que tome un objeto producto como
//argumento y muestre en la consola toda la información
//del producto.

let producto = {
    nombre: "nombre",
    precio: 124.23,
    disponible: true,

    mostrarProducto: function(producto){
        console.log("Nombre: " + producto.nombre)
        console.log("Precio: " + producto.precio)
        if(producto.disponible){
            console.log("Disponible: Si")
        }else{
            console.log("Disponible: No")
        }
        
    }
}

producto.mostrarProducto(producto);