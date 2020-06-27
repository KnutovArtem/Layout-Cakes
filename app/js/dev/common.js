'use strict'
// ------------------------------------------------------------------------
// МЕНЮ (мобильная версия)

let mobMenu = document.querySelector('.mob-menu');
let closeMenu = document.querySelector('.mob-menu__close');
let iconBurger = document.querySelector('.icon-burger');

// показываем меню
iconBurger.addEventListener('click', function(){
	mobMenu.style.right = '0px'
	mobMenu.style.transition = 'all 0.6s'
});

// закрываем меню
closeMenu.addEventListener('click', function(){
	mobMenu.style.right = '-350px'
	mobMenu.style.transition = 'all 0.6s'
});

// ------------------------------------------------------------------------
// ФИЛЬТР (КАТАЛОГ) "Выберите по вкусу"

let blockFilter = document.querySelector('.block-filter')
let filterInput = document.querySelectorAll('.filter-input')
let blocksBlock = document.querySelectorAll('.line-slider__block')
let navigations = document.querySelector('.navigations-blocks')

// Функция Активации/Деактивации серой(активной) стрелки ↓
function active(){
	let active = document.querySelectorAll('.active');
	active.forEach(function(i){
		if (active.length > numBlockSlide) {
			document.querySelector('.next').classList.remove('next-grey');
		}else{
			document.querySelector('.next').classList.add('next-grey');
		}
	});
}

// Адаптивность (изначальное условие)
var numBlockSlide = 4 // кол-во блоков слайда

if(window.innerWidth > 991){
	numBlockSlide = 4
	active();
}
if(window.innerWidth < 991){
	numBlockSlide = 3
	active();
}
if(window.innerWidth < 767){
	numBlockSlide = 2
	active();
}
if(window.innerWidth < 574){
	numBlockSlide = 1
	active();
}

// Адаптивность (условия при изменении разиера окна)
window.addEventListener("resize", function() {
	if(window.innerWidth > 991){
		numBlockSlide = 4
		active();
	}
	if(window.innerWidth < 991){
		numBlockSlide = 3
		active();
	}
	if(window.innerWidth < 767){
		numBlockSlide = 2
		active();
	}
	if(window.innerWidth < 574){
		numBlockSlide = 1
		active();
	}
}, false);

// запускаем функцию фильтра
blockFilter.onchange = function(){

	// запускаем цикл по пунктам фильтра
	for (let i = 0; i < filterInput.length; i++) {

		// при клик на любой checkbox
		if (filterInput[i].checked) {

			// запускаем цикл по блокам товара
			for (let j = 0; j < blocksBlock.length; j++) {

				// ищем в блоках товара значение пункта фильтра value
				if(blocksBlock[j].classList.contains(filterInput[i].value)){

					// добавляем класс «active» к блоку для показа
					blocksBlock[j].classList.add('active');
					active(); // Функция lene 52
				}
			}
		}else{
				// запускаем цикл по блокам товара
				for (let z = 0; z < blocksBlock.length; z++) {

				// ищем в блоках товара значение пункта фильтра value
				if(blocksBlock[z].classList.contains(filterInput[i].value)){

					// удаляем класс «active» у блока для скрытия
					blocksBlock[z].classList.remove('active');
					active(); // Функция lene 52
				}
			}
		}

	}
}

// КАРУСЛЕЬ (Блок товара) ↓

let next = document.querySelector('.next'); // Кнопка слайдера
let prev = document.querySelector('.prev'); // Кнопка слайдера
let line = document.querySelector('.line-slider'); // Линия слайдов
let right = 0   // обнуляем положенеие слайдера
let rewind = 25 // «перемотка» слайдера


// Адаптивность - изначальное условие ↓
if(window.innerWidth > 991){
	rewind = 25
}
if(window.innerWidth < 991){
	rewind = 33.33
}
if(window.innerWidth < 767){
	rewind = 50
}
if(window.innerWidth < 574){
	rewind = 100
}

// Адаптивность - условия при изменении разиера окна ↓
window.addEventListener("resize", function() {
	if(window.innerWidth > 991){
		rewind = 25
		right = 0
		line.style.right = right + '%'
	}
	if(window.innerWidth < 991){
		rewind = 33.33
		right = 0
		line.style.right = right + '%'
	}
	if(window.innerWidth < 767){
		rewind = 50
		right = 0
		line.style.right = right + '%'
	}
	if(window.innerWidth < 574){
		rewind = 100
		right = 0
		line.style.right = right + '%'
	}
}, false);

// При клике на Next
next.addEventListener('click', function(){

	//снова присваиваем переменную классу Active
	let active = document.querySelectorAll('.active');

	// запускаем цикл по Active
	active.forEach(function(i){
	});

	// кол-во блоков слайда * на значение перелистывания слайда.
	let kolvoActive = rewind * active.length

	// условие
	right = right + rewind
	if (right > kolvoActive - rewind * numBlockSlide) {
		prev.classList.add('prev-grey')
		right = 0;
	}
	line.style.right = right + '%'
	prev.classList.add('prev-grey')

	// Удаляем серую стрелку
	if (right > 10) {
		prev.classList.remove('prev-grey')
	}

});

// При клике на Prev
prev.addEventListener('click', function(){

	right = right - rewind

	if (right < 0) {
		right = 0;
	}
	line.style.right = right + '%'


	// Добавляем серую стрелку
	if (right <= 1) {
		prev.classList.add('prev-grey')
	}
});


// ------------------------------------------------------------------------
// КАРТОЧКА ТОВАРА
let card = document.querySelectorAll('.line-slider__block');
let hoverButtons = document.querySelectorAll('.hover-button');
let colvoActiveHover = document.querySelector('.colvoActive-hover');

let basket = document.querySelectorAll('.button-hover__basket');
let info = document.querySelector('.button-hover__info');

for (let j = 0; j < card.length; j++) {
	for (let i = 0; i < hoverButtons.length; i++) {

		hoverButtons[i].addEventListener('click', function(){
			console.log(hoverButtons[i].value);
			colvoActiveHover.style.display = 'block'

			if (basket.checked) {
			}
		})
	}
}

// ------------------------------------------------------------------------
// paralax

let sThree = document.querySelector('.section-three');
let bg = document.querySelector('.par-img-bg');
let bg1 = document.querySelector('.par-img-1');
let bg2 = document.querySelector('.par-img-2');

sThree.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	bg1.style.transform = 'translate(-' + x * 90 + 'px, -' + y * 90 + 'px)';
	bg2.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
});

// ------------------------------------------------------------------------
// Слайдер

// Слайд
let sliderSlide = document.querySelectorAll('.block-slider__slide');
// Навигация и инф.тект
let sliderPrev = document.querySelector('.slider-nav__prev');
let sliderNext = document.querySelector('.slider-nav__next');
let sliderBlockNumber = document.querySelector('.slider-nav__block-number span');
let sliderBlocSslider = document.querySelector('.slider__block-slider');
// Блок изображения
let sliderBlockImages = document.querySelector('.slider__block-images');

let x = 1  //(Значение для нумерации слайдера)
let s = 0  //(Значение для текста слайдера)

// Функция для адаптивности слайдера
window.addEventListener("resize", function() {
	if(window.innerWidth < 415){
		for (let i = 0; i < sliderSlide.length; i++) {
		sliderSlide[i].style.bottom = 0;
		s = 0;
		x = 1;
		sliderBlockNumber.innerHTML = x;
		}
	}
}, false);

// При клике на next ↓
sliderNext.addEventListener('click', function() {

let h = sliderBlocSslider.offsetHeight

	// Слайд текста ↓
	if (s < 1230) {
		s = s + h;
		for (let i = 0; i < sliderSlide.length; i++) {
		sliderSlide[i].style.bottom = s + 'px';
		}
	}

	// Условия для блока изображений ↓
	if (x < 5) {
		x++;
		sliderBlockNumber.innerHTML = x;
		animationImgBlock();

		if (sliderBlockImages.classList.contains('block-images-1')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-1');
				sliderBlockImages.classList.toggle('block-images-2');
			}, 580);
		}
		if (sliderBlockImages.classList.contains('block-images-2')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-2');
				sliderBlockImages.classList.toggle('block-images-3');
			}, 580);
		}
		if (sliderBlockImages.classList.contains('block-images-3')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-3');
				sliderBlockImages.classList.toggle('block-images-4');
			}, 580);
		}
		if (sliderBlockImages.classList.contains('block-images-4')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-4');
				sliderBlockImages.classList.toggle('block-images-5');
			}, 580);
		}

	}
});

// При клике на prev ↓
sliderPrev.addEventListener('click', function() {

let h = sliderBlocSslider.offsetHeight

	// Слайд текста ↓
	if (s > 0) {
		s = s - h;
		for (let i = 0; i < sliderSlide.length; i++) {
		sliderSlide[i].style.bottom = s + 'px';
		}
	}

	// Условия для блока изображений ↓
	if (x > 1) {
		x--;
		sliderBlockNumber.innerHTML = x;
		animationImgBlock();

		if (sliderBlockImages.classList.contains('block-images-5')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-5');
				sliderBlockImages.classList.toggle('block-images-4');
			}, 580);
		}
		if (sliderBlockImages.classList.contains('block-images-4')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-4');
				sliderBlockImages.classList.toggle('block-images-3');
			}, 580);
		}
		if (sliderBlockImages.classList.contains('block-images-3')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-3');
				sliderBlockImages.classList.toggle('block-images-2');
			}, 580);
		}
		if (sliderBlockImages.classList.contains('block-images-2')) {
			setTimeout(function(){
				sliderBlockImages.classList.toggle('block-images-2');
				sliderBlockImages.classList.toggle('block-images-1');
			}, 580);
		}
	}
});

// анимация блока изображения ↓
function animationImgBlock(){
sliderBlockImages.classList.add('aimation__block-images')
setTimeout(function(){
	sliderBlockImages.classList.remove('aimation__block-images')
}, 800);
}

// ------------------------------------------------------------------------
// Модальное окно

const oppaButton = document.querySelectorAll('.button'),
		  modalWindow = document.querySelector('.wrapper-modal-window'),
		  blockCalculation = document.querySelector('.modal-window__block-calculation'),
			close = document.querySelector('.modal-window__close');

// при клике на кнопку
for (let i = 0; i < oppaButton.length; i++) {
	oppaButton[i].addEventListener('click', function() {
		modalWindow.style.display = 'block'
	});
}

// при клике на крестик
close.addEventListener('click', function() {
	modalWindow.style.display = 'none'
});

document.addEventListener('change', function(e) {
  if (e.target.classList.contains('select')) {
    const
      elems = document.querySelectorAll('.select'),
      sum = [...elems].reduce((acc, n) => acc + +n.value, 0);

    document.querySelector('.sum').textContent = sum;
  }
});

