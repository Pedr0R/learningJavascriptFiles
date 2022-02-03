// let x = 10;

// while(x >= -10) {
//     console.log(x);
//     x = x - 1;
// }

// let y = 0;

// do {
//     console.log(y);
//     y = y+1;
// }while(x<=10);

// for(let numero = 2; numero<100; numero=numero*2) {
//     console.log(numero);a
// };

// for(let x = 0; x < 101; x = x+3) {
//     if(x % 5 == 0) {
//         console.log(`${x} é divisivel por 5`);
//     } else{
//         console.log(x);
//     }
// }

for(let x = 10; x < 100 ; x = x + 1) {
    if(x % 2 == 0) {
        console.log('a');
        continue
    } else {
        console.log(x)
    }
}