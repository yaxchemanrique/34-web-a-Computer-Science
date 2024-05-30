//Complejidad: O(n)

//Busca un elemento en un arreglo de enteros y devuelve su posción
function busquedaLineal(arreglo, elemento) {
    //Recorrer el arreglo
    for (let index = 0; index < arreglo.length; index++) {
        //Verfico si el elemento del arreglo es igual al elemento buscado
        if(arreglo[index] === elemento){
            //Devuelvo su posición
            return index
        }
    }
    return "No se encontró el elemento"
}

//Arreglo de prueba
let arreglo = [12,23,34,45,56,67,78,79,82,95]

console.log("Busco el número 67 en mi arreglo de prueba", busquedaLineal(arreglo, 67));//Salida esperada : 5
console.log("Busco el número 2 en mi arreglo de prueba", busquedaLineal(arreglo, 2));//Salida esperada: "No se encontró el elemento"