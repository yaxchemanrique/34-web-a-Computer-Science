function logItemsLineal(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

// logItemsLineal(10); -> 10veces
//logItemsLineal(5); // -> 5 veces
// logItemsLineal(100); // -> 100 veces

//* Big O notation: O(n)

function logItemsQuadratic(n) {
  for (let i = 0; i < n; i++) {
    for(let j = 0 ; j < n; j++) {
      console.log(`i: ${i}, j:${j}`)
    }
  }
}

//logItemsQuadratic(10) //-> 10x10 = 10^2 veces
// logItemsQuadratic(5) // -> 5x5 = 5^2 veces

// * Big O notation: O(n^2)

function logItemsCubic(n) {
  for (let i = 0; i < n; i++) {
    for(let j = 0 ; j < n; j++) {
      for( let k = 0; k < n; k++){
        console.log(`i: ${i}, j:${j}, k: ${k}`)
      }
    }
  }
}

// logItemsCubic(5); // -> 125 veces
//* Big O notation: O(n^3)


function logItemsDropConstants(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  for (let j = 0; j < n; j++) {
    console.log(j)
  }
}

// logItemsDropConstants(5) // -> 10 veces 
// * Drop constants -> Eliminar constantes
//* Big O notation: O(n+n) = O(2n) -> O(n)
// O(n + 5) -> O(n)
// O(n^2 + 5) -> O(n^2)
// O(8 n^2) -> O(n^2)

function logItemsDropNonDominants(n) {
  //* Big O notation: O(n^2)
  for (let i = 0; i < n; i++) {
    for(let j = 0 ; j < n; j++) {
      console.log(`i: ${i}, j:${j}`)
    }
  }

  //* Big O notation: O(n)
  for(let k = 0; k<n; k++) {
    console.log(k)
  }
}

logItemsDropNonDominants(10) // -> 110 veces
// * Drop non dominants -> No considerar los no dominantes
//* Big O notation: O(n^2 + n) -> O(n^2)
//* Big O notation: O(n^2 - n) -> O(n^2)

function logItems(a, b) {
  for(let i = 0; i < a; i++) {
    console.log(i)
  }

  for(let j = 0; j < b; j++) {
    console.log(j)
  }
}

logItems(5, 7) // -> 12 veces
// Different terms -> Números diferentes
//* Big O notation: O(a+b)