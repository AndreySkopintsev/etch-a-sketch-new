const grid = document.getElementById('grid')
let squares

//Functions

function fillGrid(){
    for(let i=0;i<256;i++){
        let div = document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
    squares = document.querySelectorAll('.square')   
}



fillGrid()

//Event listeners

squares.forEach(square => {
    square.addEventListener('mouseover',(e)=>{
        square.classList.toggle('red')
    })
})