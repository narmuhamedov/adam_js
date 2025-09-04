// Массивы (идексация, длина, добавление)
// Цикл for.. for of , for со счетчиком
// оператор ++ 
// управляющие операторы циклов break, continue
// Конструкции (повтор) switch.case 
// Разница между == и === 
// Принцип DRY

// Принцип DRY(Dont repeat yourself)

//корявый код
function square1(x) {
    return x * x;
}
function square2(y){
    return y*y;
}

//Dont repeat yourself
function square(n, m){
    return n*m;
}

// Разница между == и === 
// console.log('hello' =='hello') // двойное равеноство(сравнивает только значение);
// console.log(5 === 5)// тройное равенство (сравнивает значение и тип данных);
// console.log('1'=== '10');


// // Конструкции (повтор) switch.case 
// var day = Number(prompt('введите день недели?'))
// switch(day){
//     case 1:
//         console.log('Понедельник');
//         break;
//     case 2:
//         console.log('Вторник');
//         break;
//     case 3:
//         console.log('Среда');
//         break;
//     case 4:
//         console.log('Четверг');
//         break;
//     default:
//         console.log('неизвестный день');       
// }


// управляющие операторы циклов break, continue
for (var i = 1; i<=5; i++){
    if(i===3) continue; // на 3м шаге продолжил но пропустил
    if(i===5) break; // на 5м шаге останови
    console.log(i);
}







// оператор ++ 
// var num = 5;
// console.log(num++);
// console.log(num);
// console.log(++num);










// Цикл for.. for of , for со счетчиком
var numbers = [10 , 20 , 30, 40];
//for of.
for(var i of numbers){
    console.log('Элемент: ', i);
}
//for со счетчиком
for(var i=0; i < numbers.length; i++){
    console.log('Индекс '+ i + ' значение ' + numbers[i]);

}










//Массивы
var fruits = ["apple", "banana", "cherry"];
// индексация
console.log(fruits[0]);
console.log(fruits[1]);
//длинна массива
console.log(fruits.length + ' Это колличество элементов в массие');

// добавление
// push - добавдение в конец
fruits.push('orange');
// unshift - добавление в начало
fruits.unshift('mango');
// изменение
fruits[0] = 'strawberry';
console.log(fruits);




