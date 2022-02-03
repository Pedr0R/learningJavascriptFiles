let nomes = ['Pedro', 'Jacinto', 'Honófre'];
let num = [1,2,3,4,5,6,7,8,9];

function verifyLength(arr) {
    if(arr.length >= 5) {
        console.log('muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}

verifyLength(nomes);
verifyLength(num)