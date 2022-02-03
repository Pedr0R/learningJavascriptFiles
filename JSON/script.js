//funciona igual a um objeto, mas o nome dos parametros(n sei se é parametro ou outro nome) tem q ser em string,
//além disso não dá pra usar como métodos
//não aceita comentários dentro dele

let pessoa = {
    'nome' : 'Pedro',
    'idade': 18,
    'aqui tem q ser string': 'Aqui não precisa'
}

console.log(pessoa["aqui tem q ser string"].length)

//transformar json para string

let jsontostring = JSON.stringify(pessoa)
console.log(jsontostring)