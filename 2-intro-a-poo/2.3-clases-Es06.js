// Expresiones
// const Person = class {}

// Declaracaciones
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calAge() {
    console.log(`Tu edad es de ${2024 - this.birthYear}`)
  }
};

const yaxche = new Person('Yaxche', 1993);
const hector = new Person('Héctor', 2005);
console.log(yaxche);
console.log(hector);
yaxche.calAge()
hector.calAge()

// (Parámetros por defecto)
class User {
  constructor(username='userGenerico', password, email, online=false) {
    this.username = username ;
    this.password = password || '123'; //Operador OR
    this.email = email ? email : 'mail.generico@mail.com'; //Operador Ternario
    this.online = online;
  }
}

const dataBase = [];
// Persona de le click a "subscribirse"
// mostrar un formulario: -username, -password, -email
// click en Submit

const user6 = new User('yaxche', 0, undefined);
console.log(user6)

dataBase.push(user6);
console.log(dataBase);

const user7 = new User( undefined,'password123', 'luis@MediaList.com', true);
dataBase.push(user7)
console.log(dataBase)