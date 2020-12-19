import { getInputDirection } from './input.js'

export const BRZINA_ZMIJE = 5.5
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0
const scoreBoard = document.getElementById('score')

export function update(){
    addSegments()

    const inputPravac = getInputDirection()

    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] } //pomeramo zadnji blok na prvi
    }

    snakeBody[0].x += inputPravac.x
    snakeBody[0].y += inputPravac.y
}

export function draw(tablaIgre){
    snakeBody.forEach(segment => { //loopujemo kroz svaki segmet i crta zmiju na tabli
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        tablaIgre.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
    scoreBoard.textContent = `Rezultat: ${snakeBody.length}`
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0 ) return false
        return istePozicije(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function samaSebe() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function istePozicije(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++){
        snakeBody.push ({ ...snakeBody[snakeBody.length - 1] }) //uzimamo poslednji element zmije i pravimo duplikat na kraju, 
                                                                //kako bi se zmija postepeno povecavala kako se krecemo
    }
                                                                
    newSegments = 0; //kako ne bi rasla konstantno osim za onaj broj elemenata koji smo zadali                                                            
}