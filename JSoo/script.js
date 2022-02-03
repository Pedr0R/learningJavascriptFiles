// const cachorro = {
//     raca: 'ntem',
//     rosnar: function grr() {
//         console.log('grrrr')
//     },
//     setRaca: function (raca) {
//         this.raca = raca;
//     },
//     getRaca: function () {
//         return 'A raça é ' + this.raca;
//     }
// }


// function Cachorro(raca, nome, idade) {
//     this.raca = raca;
//     this.nome = nome;
//     this.idade = idade;
//     this.uivar = function () {
//         console.log('AUUUUUUUUUUUUw')
//     };
// }

// let pastorAlemao = new Cachorro('Pastor Alemão', 'Jhow', 8)

// console.log(pastorAlemao)
// pastorAlemao.uivar()

// function Cachorro(raca, nome, idade) {
//     this.raca = raca;
//     this.nome = nome;
//     this.idade = idade;
// }

// Cachorro.prototype.uivar = function () {
//     console.log('AuuuuuuuuuuuuuUw')
// }

// let jhony = new Cachorro('Golden', 'Jhony', 10)
// jhony.uivar()

// class Cachorro {
//     constructor(raca){
//         this.raca = raca
//     }
// }
// let labrador = new Cachorro('Golden');
// console.log(labrador.raca);

class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }
}

let Pug = new Cachorro(4, 'Pug')
console.log(Pug)
console.log(new Mamifero instanceof Cachorro)