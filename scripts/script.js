let gridContainer = document.querySelector('.grid-container');

let container = document.querySelector('.container');
let currColor;

let size = document.querySelector('.size-container');

function drawGrid(num) {
    if (num < 90) {
        for (let i = 0; i < (num * num); i++) {
            let div = document.createElement('div');
            div.classList.add('cell');

            container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr)`);
            container.append(div);
        }
    }
    else {
        num = prompt('please enter a number less than 90');
        drawGrid(num);
    }
    size.innerText = `${num} X ${num}`;
}

function colorChange(e) {
    if (e.currentTarget.style.backgroundColor == '') {
        e.currentTarget.style.backgroundColor = changeColor();
    }
}

function changeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    currColor = `rgb(${r}, ${g}, ${b})`

    return currColor;
}

let num = prompt("Enter size of grid");

drawGrid(num);

let cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseleave', colorChange);
});

let reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    container.innerHTML = '';
    num = prompt('Enter size of grid');
    drawGrid(num);
    cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseleave', colorChange);
    });

});


