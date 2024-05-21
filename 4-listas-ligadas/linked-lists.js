class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const node = new Node(15);

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while(temp !== null){ //* ! = =
      console.log(temp.value);
      temp = temp.next;
    } 
  }

  getHead() {
    console.log(this.head.value)
  }

  //? Hacer un metodo getTail() -> cual es el valor de la cola
  //? Hacer un metodo length() -> cual es la longitud de la lista ligada 

  push(value) {
    const newNode = new Node(value);
    // -  7  -
    this.tail.next = newNode;
    this.tail = newNode;
    // this.length = this.length + 1;
    // this.length += 1;
    this.length++;
  }

  pop() {
    let temp = this.head;
    let pre = this.head;
    while(temp.next !== null) {
      pre = temp;
      temp = temp.next
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
  }
}

const list = new LinkedList(8);
console.log(list)
// list.printList()
// list.getHead()

list.push(15);
list.push(7);
list.push(89);
list.printList()
console.log(list)

console.log('-------------------------')
list.pop();
list.printList();
console.log(list);
// list.length()

