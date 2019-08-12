// Your code goes here
let navBar = document.querySelector('.main-navigation');
  navBar.addEventListener('click', event => {
    event.target.style.backgroundColor = '#F3FF69';
  });

window.addEventListener('load', () => {
  alert('Hello from the Fun Bus!');
});

document.addEventListener('copy', () => {
  console.log('Copy Away!');
});

window.addEventListener('wheel', () => {
  console.log('You\'ve been scrolled');
});