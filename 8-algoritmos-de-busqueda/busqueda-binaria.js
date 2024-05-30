//Complejidad: O(log(n))

//Buscar un elemento en un arreglo de enteros y devolver su posición
function busquedaBinaria(arreglo, elemento) {
    let inicio = 0
    let fin = arreglo.length - 1
    let medio = 0
    //Itero mi búsqueda mientras el inicio sea menor o igual al fin del arreglo
    while (inicio <= fin) {
        //Paso 1: Definir la mitad de mi arreglo
        medio = Math.floor((inicio + fin) / 2)

        //Escenario 1: El elemento que estoy buscando se encuentra a la mitad de mi arreglo
        if (elemento === arreglo[medio]) {
            //Devuelvo el punto medio
            return medio
        //Escenario 2: El elemento que estoy buscando es MENOR al punto medio de mi arreglo
        }else if(elemento < arreglo[medio]){
            fin = medio - 1
        }else{
        //Escenario 3: El elemento que estoy buscando es MAYOR al punto medio
            inicio = medio + 1
        }

    }
    return "No se encontró el elemento"
}

//Arreglo de prueba
let arreglo = [12,23,34,45,56,67,78,79,82,95]

console.log("Busco el número 67 en mi arreglo de prueba", busquedaBinaria(arreglo, 67));//Salida esperada : 5
console.log("Busco el número 2 en mi arreglo de prueba", busquedaBinaria(arreglo, 2));//Salida esperada: "No se encontró el elemento"