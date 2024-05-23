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