import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = randomFoodPosition()
const VELICINA_RASTA = 1

export function update(){
    if (onSnake(food)) {
        expandSnake(VELICINA_RASTA)
        food = randomFoodPosition()
    }
}

export function draw(tablaIgre){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    tablaIgre.appendChild(foodElement)
}

function randomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition() //konstantno ce loopovati i traziti novi value za poziciju hrane koji nije na zmiji tacno
    }
    return newFoodPosition
}