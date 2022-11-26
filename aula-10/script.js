setTimeout(() => {console.log('Meu resultado')}, 3000);

/* Promises */
function show() {
    setTimeout(() => {
        console.log('Oi!')
    }, 2000);

    console.log('Até logo')
}

show()

const minhaPromise = new Promise((resolve, reject) => {
    let n = 9
    if(n > 10) {
        resolve()
    } else {
        reject()
    }
})

minhaPromise
.then(result => console.log('resolveu'))
.catch(err => console.log('erroouuuu'))
.finally(() => console.log('Finally!'))

// fetch()
const firstUser = (userId) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(res => res.json())
    .then(data => console.log(`O title é ${data.title}`))
}

firstUser(2)

const cep = '01001000'

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(cep => {
    console.log(`O bairro é ${cep.bairro} e o logradouro é ${cep.logradouro}`)
});
