const product = document.getElementById('product');
const desc = document.getElementById('desc');
const buyBtn = document.getElementById('buy');

//1 покупка click

buyBtn.addEventListener('click', ()=>{
    alert('Товар добавлен в корзину!')
});

//2 двойной клик по картинки

product.addEventListener('dblclick', ()=>{
    product.classList.toggle("big");
});

//3 наведение мыши на описание 
desc.addEventListener("mouseover", ()=>{
    desc.classList.add('hightlight');
})

desc.addEventListener('mouseout', ()=>{
    desc.classList.remove('hightlight')
})

// Правый клик по товару

product.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
    alert('Контекстное меню: добавить в избранное?')
})