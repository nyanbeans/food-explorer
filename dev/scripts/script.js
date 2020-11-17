// Write your JavaScript here...

//Script for Nav Button//

const body = document.body;
const btn = document.querySelector('.hamburger-button');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});