// Primera forma de hacerlo.
// const list = [10,20,30,40];

let cont = 0;
function calcPromedio(list) {
    console.log(list);
    for(i=0; i<list.length; i++) {
        cont += list[i];
    }
    let promedio = cont / list.length;
    // return console.log(`El promedio de la lista es: ${promedio}`);
    return promedio;
}

// Segunda forma:
function calcProm(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) { // La función Reduce nos deja recibir dos parametros
        return valorAcumulado + nuevoValor;
    }

    const sumaLista =lista.reduce(sumarTodosElementos); // Este método recibe una función


    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
}

// RETO
// Conocer si la sumatoria de numeros de una lista es PAR o IMPAR.
const listaPar = [1,2,3,4];
const listaImpar = [1,2,3,3];

function parImpar(lista) {
    const finalNum = lista.reduce((acum, val) => {
        return acum + val;
    });

    if(finalNum % 2 == 0) {
        console.log(`La lista es Par ${finalNum}`);
    } else if(finalNum % 2 != 0) {
        console.log(`La lista es Impar ${finalNum}`);
    } else {
        console.log(`Algo no esta bien`);
    }
}

// parImpar(listaPar);
// parImpar(listaImpar);
// parImpar('test');


//  ---- Calculando la mediana ----

function esPar(lista) {
    return !(lista.length % 2);
}

function esImpar(lista) {
    return lista.length % 2;
}

function calcMediana(lista){
    const listaEsPar =  esPar(lista);

    if (listaEsPar) {
        const index1MedianaListaPar = Math.ceil(lista.length / 2);
        const index2MedianaListaPar = index1MedianaListaPar -1;
        // console.log(lista[index1MedianaListaPar]);
        // console.log(lista[index2MedianaListaPar]);
        
        const NuevalistaMitades = [];
        NuevalistaMitades.push(lista[index1MedianaListaPar]);
        NuevalistaMitades.push(lista[index2MedianaListaPar]);

        // console.log(NuevalistaMitades);
        return calcProm(NuevalistaMitades);

    } else {
        const IndexMedianaLista = Math.floor(lista.length / 2);
        console.log(lista[IndexMedianaLista]);
        return lista[IndexMedianaLista];
    }
}

let listaMedianaPar = [10,20,30,40];
calcMediana (listaMedianaPar);

// let listaMediana = [10,20,30];
// calcMediana (listaMediana);