/* Scope */
{
    let x = 2
    console.log(x);
}

{
    let y = 12 
}
// aqui vai retornar um erro
//console.log(y)

/* Reassign a value */
let w = 10
w = 5

console.log(w)

/* Não é possível reatribuir um valor em const
const z = 10
z = 5 */ 

// aqui vai retornar um erro
//onsole.log(z)

/* Template strings */
console.log("Template strings:")
let firstName = "José"
let lastName = "da Silva"

let text = `Welcome, ${firstName} ${lastName}!`
console.log(text)

let price = 20
let fees = 0.50
let total = `O total do produto é: R$ ${(price + fees)}`
console.log(total)
