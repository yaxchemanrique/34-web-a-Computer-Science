class Pila{
    constructor(){
        this.datos = []
    }

    /* push: Agregar un nuevo valor a la pila, ubicándolo al final de ésta */
    push(nuevoDato){
        this.datos.push(nuevoDato)
    }

    /* pop: Retrona el último valor, sacándolo de la pila */
    pop(){
        return this.datos.pop()
    }

    /* peek: Retornar el último valor, sin sacarlo de la pila*/
    peek(){
        return this.datos[this.datos.length - 1]
    }

    /* size: Retorna el número de elementos que contiene la pila */
    size(){
        return this.datos.length
    }

    /* print : Muestra el contenido de la pila*/
    print(){
        console.log(this.datos);
    }
}

//Implementamos la pila

let pila = new Pila()

//agrego datos a mi pila
pila.push(1)
pila.push(2)
pila.push(3)
pila.push(4)
pila.push(5)
pila.push("Esta es una cadena")
//imprimo mis datos
pila.print()
//eliminar datos
let datoEliminado = pila.pop()
//imprimo mis datos
pila.print()

console.log(`El dato eliminado es: ${datoEliminado}`);