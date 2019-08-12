// Your code goes here

// triggers when click any element within header
let navBar = document.querySelector('.main-navigation');
navBar.addEventListener('click', event => {
  event.target.style.backgroundColor = '#F3FF69';
});

// triggers on load with alert
window.addEventListener('load', () => {
  alert('Hello from the Fun Bus!');
});

// triggers when any element within the document is copied
document.addEventListener('copy', () => {
  console.log('Copy Away!');
});

// triggers when mouse wheel is moved up or down
window.addEventListener('wheel', () => {
  console.log('You\'ve been scrolled');
});

// triggers when mouse is moved onto image
let mapBorder = document.querySelector('.map');
mapBorder.addEventListener('mouseenter', event => {
  event.target.style.border = '5px dotted #C9E5FF';
});

// triggers when mouse leaves image
mapBorder.addEventListener('mouseleave', event => {
  event.target.style.border = '2px solid #0055AA';
});

// triggers when mouse is over text then resets after mouse leaves
let textEvent = document.querySelector('.content-destination');
textEvent.addEventListener('mouseover', event => {
  event.target.style.color = '#FF5500';
  setTimeout(function() {
    event.target.style.color = 'black';
  }, 1000);
}, false);

// triggers random color when clicked
let button = document.querySelector('.btn');
button.addEventListener('click', event => {
  event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
});

// triggers when mouseover to transparent image
let headerImage = document.querySelector('.bus');
headerImage.addEventListener('mouseover', event => {
  event.target.style.opacity = '0.5';
  setTimeout(function() {
    event.target.style.opacity = '1';
  }, 1000);
}, false);

let boatImage = document.querySelector('.img-fluid');
