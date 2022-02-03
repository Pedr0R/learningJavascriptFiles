function verificaTipodeDado(data) {
    let type = typeof(data);
    if(type == Number) {
        console.log('o tipo de dado é number');
    } else if(type == String) {
        console.log('O tipo de dado é string')
    } else{
        console.log('o tipo de dado é bolean')
    }
}