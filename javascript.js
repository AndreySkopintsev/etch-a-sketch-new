const grid = document.getElementById('grid')
let squares
let color = 'black'
let mouseDown = false

//Functions

function fillGrid(){
    for(let i=0;i<256;i++){
        let div = document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
    squares = document.querySelectorAll('.square')   
}

document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}


fillGrid()

//Event listeners

squares.forEach(square => {
    square.addEventListener('mouseover',(e)=>{
        if(mouseDown){
            e.target.style.backgroundColor = 'black'
        }
    })
})