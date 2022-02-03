let calculadora = {
    somar: function somar(x, y) {
        if(isNaN(x)) {
            console.log('Insira um valor válido')
        } else if(isNaN(y)) {
            console.log('Insira um valor válido')
        }else{
            console.log(x+y);  
        }
    },
    subtrair: function subtrair(x, y) {
        if(isNaN(x)) {
            console.log('Insira um valor válido')
        } else if(isNaN(y)) {
            console.log('Insira um valor válido')
        }else{
            console.log(x-y);  
        }
    },
    multiplicar: function multiplicar(x, y) {
        if(isNaN(x)) {
            console.log('Insira um valor válido')
        } else if(isNaN(y)) {
            console.log('Insira um valor válido')
        }else{
            console.log(x*y);  
        }
    },
    dividir: function dividir(x, y) {
        if(isNaN(x)) {
            console.log('Insira um valor válido')
        } else if(isNaN(y)) {
            console.log('Insira um valor válido')
        }else{
            console.log(x/y);  
        }
    }
}

