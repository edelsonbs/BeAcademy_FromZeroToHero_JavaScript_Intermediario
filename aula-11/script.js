/* async/await */

const firstUser = async (userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJSON = await response.json()
    let title = await resultJSON.title
    console.log(resultJSON)
    console.log(title)
}

firstUser(1)

/* try/catch */
// https://jsonplaceholder.typicode.com/todos/3

async function user() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/3`)
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('error ----->', error)
        throw new Error('Deu algum erro na requisição')
    } finally {
        console.log('acabou')
    }
}

user()