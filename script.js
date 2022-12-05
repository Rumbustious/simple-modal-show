'use strict';
const showBtns = document.querySelectorAll('.show');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');


// open modal panel
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// close modal panel
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// when show button is clicked
for(let i = 0; i < showBtns.length; i++)
    showBtns[i].addEventListener('click', openModal);

// when X "close" button is clicked
closeBtn.addEventListener('click', closeModal);
//when it is click on overlay
overlay.addEventListener('click', closeModal);

// ESC key
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape' && !overlay.classList.contains('hidden')){
        closeModal();
    }
})