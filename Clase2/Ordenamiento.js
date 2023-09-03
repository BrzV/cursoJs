let lista = [20, 15, 5, 6, 1, 34];

console.log(lista);

for (let i = 0; i < lista.length; i++) {
    for (let t = 0; t < lista.length - i; t++) {
        if (lista[t] > lista[t + 1]) {
            let arg = lista[t];
            lista[t] = lista[t + 1];
            lista[t + 1] = arg;
        }
    }
}

console.log(lista);