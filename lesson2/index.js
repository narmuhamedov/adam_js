// if, else if, else
// || - or  && - and

// AU AG PL
var amount = prompt('Enter amount');
var currency = prompt('Enter currency');
var converter_amount = 0

switch(currency){
    case 'AU':
        converter_amount = amount / 5000;
        break;
    case 'AG':
        converter_amount = amount / 2000;
        break;
    case 'PL':
        converter_amount = amount / 9000;
        break;
}
console.log(converter_amount);





// var pocket_money = Number(prompt('сколько у вас денег в кармане? '));
// if (pocket_money>=100) {
//    console.log('Сходи в столовую');   
// }else if (pocket_money<=50 && pocket_money>=30) {
//     console.log('Сходи в буфет');
// }else{
//     console.log('Теперь моя любимая еда вода!');
// }