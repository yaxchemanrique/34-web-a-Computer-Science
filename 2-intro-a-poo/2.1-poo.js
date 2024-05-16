/* 
* CLASE -> "Plano"
* Función contructora
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this);
  
   //MUUUUY mala práctica ⬇️
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // }
}

Person.prototype.calcAge = function() {
  console.log(2024 - this.birthYear);
}

Person.prototype.species = 'Homo Sapiens'

/* 
* creación de nuestro objeto usando la palabra reservada new 
*/
const yaxche = new Person('Yaxche', 1993);
const fulano = new Person('Fulano', 2005);

console.log(yaxche)
yaxche.calcAge()
console.log(fulano)
console.log(yaxche.species)

/* 
* Lo que está sucediendo por detrás:
const obj = {};
obj.prop1 = 'Propiedad 1'
obj.prop2 = 'Propiedad 2'

console.log(obj)
*/

/* 
* Como funcionan los objetos y métodos en JS
const gilberto = {
  name: 'Gilberto',
  balance: 5685,

  // Método (funcion cualquiera)
  transfer: function (quantity) {
    gilberto.balance = gilberto.balance + quantity
  }
}

console.log(gilberto);
gilberto.transfer(500);
console.log(gilberto);
*/


/*
* 1. Se crea un objeto vacío --> Consola: Person {}
* 2. Se llama a la función contructora
*         2.1 this = {}
? 3. {} se liga al prototipo
* 4. la funcion constructora nos regresa nuestro objeto [yaxche, fulano]
*/

// console.log(yaxche.__proto__)
// console.log(fulano.__proto__)

// console.log(Person.prototype)
// console.log(Person.prototype === yaxche.__proto__)
// Person.protypeOfIntances
// console.dir(Person.__proto__)

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
arr.push(4)
console.log(arr)
console.log(arr2)

console.log(arr.__proto__)

const arr3 = new Array
const arr4 = []


