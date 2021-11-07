// A modal is a dialog box/popup window that is displayed on top of the current page: 

const modal = document.querySelector(".modal");

const loginBtn =document.querySelector('.login-btn');

const closeBtn = document.querySelector('.close');


loginBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);


function openModal() {
    modal.style.display='block';
}

function closeModal() {
    modal.style.display='none';
}


// e - event parameter - when an event / click fires off 
function outsideClick(e) {
    if(e.target== modal) {
        closeModal()
    }
}