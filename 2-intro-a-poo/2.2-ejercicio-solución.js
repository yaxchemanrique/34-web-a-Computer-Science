/* # Ejercicio 1

1. Usa la función constructora para implementar un carro. Un carro (en términos de nuestra solución) tiene las propiedades de marca y velocidad a la que van (km/h)

2. Implementa un método "acelerar" que incremente la velocidad del auto en **10 km/h** y haga un `console.log` de la nueva velocidad

3. Implementa un método de "frenar" que disminuya la velocidad del auto en **5 km/h** y haga un `console.log` de la nueva velocidad

4. Crea dos objetos y llama varias veces a los métod s "acelerar" y "frenar" para probar tu código

---
- Data Carro1: "BMW" con una velocidad de 120 km/h
- Data Carro2: "Mercedes" con una velocidad de 95 km/h */

/* const Carro = function(marca, velocidad){
  this.marca = marca;
  this.velocidad = velocidad;

  this.aceleracion = function() {
    this.velocidad = this.velocidad + 10
    console.log(this.velocidad )
  }

  this.freno = function() {
    this.velocidad = this.velocidad - 5
    console.log(this.velocidad)
  }
}

const bmw = new Carro('BMW', 120);
const mercedes = new Carro('Mercedes', 95);

bmw.aceleracion()
bmw.freno()
mercedes.aceleracion()
mercedes.freno()
mercedes.freno()
mercedes.freno()
mercedes.freno() */

const Carro = function(brand, actualSpeed){
  this.brand = brand;
  this.actualSpeed = actualSpeed;

  this.accelerate = function(){
      this.actualSpeed = this.actualSpeed + 10
      console.log(actualSpeed)
      
  }

  this.slowdown = function(){
      actualSpeed = this.actualSpeed -5;
      this.actualSpeed = actualSpeed
      console.log(actualSpeed)   
  }
}

//* a = a + 10
//* a += 10

const carro1 = new Carro ("BMW", 120);
const carro2 = new Carro ("Mercedes", 95);

carro1.accelerate()
carro1.slowdown()
carro2.accelerate()
carro2.slowdown()
carro2.slowdown()
carro2.slowdown()

console.log(carro1)
console.log(carro2)
