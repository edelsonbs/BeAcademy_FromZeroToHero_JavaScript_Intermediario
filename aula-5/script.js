/* Prototypes */
const notebook = {
    cor: 'preta',
    ano: 2022,
    specifications: function(value) {
        return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

console.log(notebook)
console.log(notebook.cor)

const dell = {
    marca: 'Dell'
}

const macBook = {
    marca: 'MacBook'
}

Object.setPrototypeOf(dell, notebook)
Object.setPrototypeOf(macBook, notebook)

console.log(dell)
console.log(dell.specifications(5000))

console.log(macBook)
console.log(macBook.specifications(15000))