// let cachorro = {
//     patas: 4,
//     cor: 'caramelo',
//     tamanho: 'médio',
//     nome: 'linguiça',
//     latir: function() {
//         console.log('AU AU AU AU')
//     }
// };

// console.log(cachorro.cor);
// console.log(cachorro);
// cachorro.latir();

// {} = objeto
// [] = array = tipo uma lista

let pessoa = {
    nome: 'Pedro',
    idade: 18,
    profissão: ''
};

console.log(pessoa);
delete pessoa.profissão;
console.log(pessoa.profissão);
console.log(pessoa.elo)
pessoa.elo = 'p';
console.log(pessoa.elo);

let abilidades = {
    pinta: true,
    fazComida: true,
    sujo: false
};

Object.assign(pessoa, abilidades);
console.log(pessoa);
console.log(Object.keys(pessoa));

let pessoa1 = pessoa;

console.log(pessoa == pessoa1);
