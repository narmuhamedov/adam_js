// DOM - Document Object Model

// Получаем элементы
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');



// продумать логику и добавить события и обработки ошибок
// пользователь заполнил не все поля (должен выйти alert о предупреждении)
// добавить событие которые покажет внизу сколько билетов он приобрел и куда приобрел
// сделать в виде таблицы (не использовать тег <table></table>)


//Обработчик событий при вводе имени
nameInput.addEventListener('input', function(){
    hello.textContent = "Привет, " + nameInput.value + "!";
});
//Обработчик событий при клике на кнопку
btn.addEventListener('click', function(){
    status.textContent = 'Вы купили билет';
    status.style.color = 'green';
})

//При наведении на кнопку событие
btn.addEventListener("mouseover", function(){
    status.textContent = 'Вы готовы купить билет?'
    status.style.color = 'hwb(80 9% 43%)'
});

//При двойном нажатии на кнопку 
btn.addEventListener('dblclick', function(){
    status.textContent = 'Вы купили VIP-билет';
    status.style.color = '#BA55D3'
})