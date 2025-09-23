// // * Циклы (повторение)
// * Что такое бесконечный цикл. Причины и последствия.
// * Операторы ++ и — в деталях
// * Циклы while, do..while
// * Задача на переворот строки через стек (вот визуализация работы стека (https://www.youtube.com/watch?v=I37kGX-nZEI&t=398s&pp=ygUTc3RhY2sgdmlzdWFsaXphdGlvbg%3D%3D))
// * Игра "Угадай число"
// * Функции. 2 способа написания: expression и declaration. Ключевое слово return.
// * Тернарный оператор
// * Виды операторов: унарные, бинарные, тернарный.


var a = 10;
console.log(-a); // -10
console.log(++a); //11






// // * Тернарный оператор
// var age = 15;
// var status = (age>=18) ? "Взрослый":"Не совершеннолетний"
// console.log(status);







// * Функции. 2 способа написания: expression и declaration. Ключевое слово return.


//declaration
// function square(x){
//     return x*x;
// }
// console.log(square(5));

// //expression
// var square1 = function(a,b){
//     return a*b;
// }
// console.log(square1(3,4));





// var secret = Math.floor(Math.random()*100)+1;
// var guess;
// var attemps = 0;

// do{
//     guess = Number(prompt('Угадай число от 1 до 100'));
//     attemps++;
//     if (guess<secret){
//         alert('Слишком маленькое');
//     }else if (guess>secret){
//          alert('Слишком большое');
//     }else{
//          alert('Угадал');
//     }

// }while (guess !== secret); 










// var password;

// do{
//     password = prompt('Enter your pass');

// }while(password !=='1234');

// alert('Доступ разрешен');






// var x = 5;
// console.log(x++);//возвращает число а потом увеличивает
// console.log(x);

// var q = 1;
// console.log(++q);





// var i = 0;
// while(i<5){
//     console.log('i = ' +i);
//     i++;
    
// }

//error
// var i = 0;
// while(i<5){
//     console.log("i= "+i);
    
// }








// * Циклы (повторение)
// for(var i = 1; i<=10; i++){
//     console.log('Число--', i);
    
// }
// for(var i=1; i<=10; i++){
//     if (i%2===0) {
//             console.log(i+' -четное');
            
//     }else{
//         console.log(i+' -нечетное');
        
//     }
// }