/* rest parameters */
function getSum(...args) {
    let total = 0
    for(const arg of args) {
        total = total + arg
    }
    return total
}

console.log(getSum(2, 5, 10, 2))

// spread operator
console.log('Usando o spread operator: ')
const arr = [1, 2, 3]
const arr2 = [...arr, 4]
console.log(arr2)

// merge arrays
console.log('Mergiando arrays: ')
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const mergeArrays = [...array1, ...array2]
console.log(mergeArrays)

const a = [1, 2, 3]
const b = [4, 5, 6]

const merge = [0, 'Marcelo', ...b, ...a]
console.log(merge)

/* Destructuring */
console.log('Destructuring:')
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4
}

//const marca = carro.marca
//const ano = carro.ano

const {marca, ano, portas} = carro

console.log(marca)
console.log(ano)
console.log(portas)
console.log(`O carro é da marca ${marca}, ano ${ano} e tem ${portas} portas`)

const cliente = {
    nome: 'Marcelo',
    compras: {
        digitais: {
            livros: ['Dom Casmurro','O Cortiço'],
            filmes: ['Senhor dos Anéis','Matrix']
        },
        fisicas: {
            cadernos: ['Caderno']
        }
    }
}

console.log(cliente.compras.digitais.livros)
console.log(cliente.compras.digitais.filmes)

const {livros,filmes} = cliente.compras.digitais

console.log(livros)
console.log(filmes)

// destructuring arrays
const frutas = ['Banana','Uva','Morango']

const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]

console.log(segundaFruta)

// Com destructuring
console.log('Com destructuring:')
const [primeira, segunda, terceira] = frutas
console.log(primeira)
