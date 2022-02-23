"use strict";
const colors = [
    'crimson',
    'deeppink',
    'deepskyblue',
    'gold',
    'lightgrey',
    'pink',
    'orange',
    'mediumturquoise',
    'lemonchiffon',
    'indigo'
]


// const color_pickers = document.querySelectorAll('.color-picker');
// const container = document.querySelector('.container');
// color_pickers.forEach(element => {
//     element.addEventListener('click', function(event) {
//         // console.log(container)
//         container.style.backgroundColor = event.target.style.backgroundColor;
//         event.target.style.border = '10 px solid green';
//     });

// });

// function listColot(event) {
//     console.log(color_pickers);
//     for (let i = 0; i < color_pickers.length; i++) {
//         color_pickers[i].style.backgroundColor = color[i];
//     }
// }

function setColor(color) {
    document.body.style.backgroundColor = color
    document.getElementById('current_color').innerHTML = color;
    const currentActiveButton = document.querySelector('button.active');
    console.log(currentActiveButton)
    if (currentActiveButton !== null) {
        currentActiveButton.classList.remove('active');
    }
    document.querySelector(`button[data-color="${color}"`).classList.add('active');

}
colors.forEach(color => {
    const botton = document.createElement('button');
    botton.style.background = color;
    botton.setAttribute('data-color', color);
    botton.onclick = function() {
        setColor(color);
    }
    document.querySelector('div.colors').appendChild(botton);

})







window.onload = function() {
    // listColot();
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    setColor(color);



}