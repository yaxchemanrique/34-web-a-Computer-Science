/* RECURSIVIDAD

Recursividad es un concepto fundamental en programación donde una función se llama a sí misma
para resolver un problema.
La idea principal es dividir un problema en subproblemas más pequeños, resolver eos subproblemas,
y combinar esas soluciones para resolver el problema original.

CONCEPTOS BÁSICOS
Caso base: Es la condición que termina la recursión. Sin un caso base, la recursión continuaría
indefinidamente, causando un desbordamiento.
Caso recursivo: Es la parte de la función que llama a sí misa con un subproblema más pequeño.

*/

/*Factorial de un número: El factorial de un número n (n!) se define como el producto
de todos los número positivos menores o igual a n.
Por ejemplo el factorial de 5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {

    //CASO BASE
    if(n == 1){
        return 1
    }

    //CASO RECURSIVO
    return n * factorial(n - 1) 
    // 120
}

console.log("------------FACTORIAL-------------");
//factorial(5) -> 120
let res = factorial(5)
console.log(res);

res = factorial(6)
console.log(res);


/* Potencia de un número: Calcular "x" elevado a la "n" potencia (x^n) usando recursividad */
function potencia(base, exponente) {
    //CASO BASE
    if(exponente === 0){
        return 1
    }
    
    //CASO RECURSIVO
    return base * potencia(base, exponente - 1)
    //potencia(3, 4) -> 81
}
console.log("------------POTENCIA-------------");
console.log(potencia(3, 4));
console.log(potencia(2, 4));