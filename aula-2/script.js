/* Immediately invoked function expression ou IIFE */

(function helloWorld(){
    alert('Hello, world!')
  }
)();

(function (message){
    alert(message)
  }
)('Hello, world!');

/* Arrow function */

/* function sum(a) {
    return a + 10;
} */

const sum = a => a + 100
console.log(sum(3))

// Exemplo com map()
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

const newArray = materials.map(
    function showLength(materials) {
        return materials.length
    }
)

const newArray2 = materials.map(m => m.length)
console.log(newArray2)