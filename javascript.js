const grid = document.getElementById('grid')
const clearBtn = document.getElementById('clearBtn')
const toggleGrid = document.getElementById('toggleLines')
const colorPicker = document.getElementById('colorPicker')
const colorFill = document.getElementById('colorFill')

let squares
let color = 'black'
let background = 'white'
let mouseDown = false

//Functions

//Changing mouseDown value on mousedown/mouseup
document.body.onmousedown = () => {mouseDown = true} //if the mouse down and over a square it will get filled in
document.body.onmouseup = () => {mouseDown = false} //otherwise there's no filling

//Creates squares for the grid at the start of the program, so we can leave grid empty in html 
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

//On mouseover and mousedown squares are filled in
squares.forEach(square => {
    square.addEventListener('mouseover',(e)=>{
        if(mouseDown){
            e.target.style.backgroundColor = color
        }
    })
})

//Color picker button
colorPicker.addEventListener('input',()=>{
    color = colorPicker.value
    console.log(color)
})

//Color fill button (used to change background color)
colorFill.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('toggledOn')){
        console.log('inactive')
        e.target.classList.add('toggledOn')
        background = colorPicker.value
        grid.addEventListener('click',()=>{
            grid.style.backgroundColor = `${background}`
            e.target.classList.remove('toggledOn')
        })
    }else{
        console.log('active')
        e.target.classList.remove('toggledOn')
        grid.removeEventListener('click')
    }
})

//Clear button
clearBtn.addEventListener('click',()=>{
    squares.forEach(square => {
        square.style.backgroundColor = '#fff'
    })
})

//Grid turning on/off
toggleGrid.addEventListener('click',()=>{
    toggleGrid.classList.toggle('toggledOn')
    squares.forEach(square => {
        square.classList.toggle('emptyGrid')
    })
})