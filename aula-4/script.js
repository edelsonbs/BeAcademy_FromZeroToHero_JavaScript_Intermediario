/* Prototypes */
function Pessoa(nome, idade, peso) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
}

const marcelo = new Pessoa('Marcelo', 44, 80)
console.log(marcelo)

const pessoa = "João"
console.log(pessoa.length)
console.log(pessoa.toUpperCase())
console.log(pessoa.__proto__)