class Cola{
    constructor(){
        this.datos = []
    }

    /*enqueue: Agrega un nuevo elemento a la cola, situándolo al final */
    enqueue(nuevoDato){
        this.datos.push(nuevoDato)
    }

    /* dequeue: Retorna el primer elemento de la cola, quitándolo de ésta */
    dequeue(){
        return this.datos.shift()
    }

    /* peek: Retorna el primer elemento de la cola, sin quitarlo */
    peek(){
        return this.datos[0]
    }

    /* size: Retorna el número de elementos que contiene la cola */
    size(){
        return this.datos.length
    }

    /* print: Muestra el contenido de la cola */
    print(){
        console.log(this.datos);
    }
}
//Implemento una cola
let queue = new Cola()

//Agrego elementos
queue.enqueue("José José - Gavilán o paloma")
queue.enqueue("Coldplay - Viva la vida")
queue.enqueue("Luis Miguel - La media vuelta")
queue.enqueue("Black Clover - Opening 3")

//Imprimo elementos
queue.print()

//Eliminar elementos
let cancionReproducida = queue.dequeue()

console.log(`La cación que se está reproduciendo es... ${cancionReproducida}`);
queue.print()