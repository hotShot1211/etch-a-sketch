let gridContainer = document.querySelector('.grid-container');

let container = document.querySelector('.container');
console.log(container);

function drawGrid(num){
    for(let i = 0; i < (num*num); i++){
        let div = document.createElement('div');
        div.classList.add('grid-element');
    
        container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr)`);
        // container.setAttribute('style', `grid-template-rows: repeat(${4}, 1fr)`);
        container.append(div);
    }
}

let num = prompt("Enter size of grid");

drawGrid(num);
