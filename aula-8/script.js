/* Herança */
class Candidates {
    constructor(firstName, surName, cpf) {
        this.firstName = firstName
        this.surName = surName
        this.cpf = cpf
    }
}

class Masc extends Candidates {
    constructor(firstName, surName, cpf, reservista) {
        super(firstName, surName, cpf)
        this.reservista = reservista
    }
}

const candidate1 = new Masc('Marcelo','Vasque', 123456789, true)
const candidate2 = new Candidates('Maria', 'Fulana', 1111111111)
console.log(candidate1)
console.log(candidate2)
