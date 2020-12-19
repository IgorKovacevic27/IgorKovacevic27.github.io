import { update as updateSnake, draw as drawSnake, BRZINA_ZMIJE, getSnakeHead, samaSebe } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const tablaIgre = document.getElementById('tabla-igre')

function main(trenutnoVreme){ //fja koja ce se konstantno loopovati i pratiti trenutno vreme
    if(gameOver) {
       if(confirm('Izgubili ste! Kliknite OK za restart.')) {
           window.location = '/' //refreshuje stranicu i samim tim restartuje igricu
       }
       return //da se ne bi nastavila igrica ako klikne cancel
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (trenutnoVreme - lastRenderTime) / 1000 //delimo sa 1000 da bi pretvorili u sec
    if (secondsSinceLastRender < 1 / BRZINA_ZMIJE) return


    lastRenderTime = trenutnoVreme //konstantno imamo novo zadnje vreme renderovanja

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){ //fja koja updateuje sta se sve desava u igri
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){ //fja koja uzima logiku od update i realizuje na tabli igre, npr povecanje zmije kad pojede hranu i sl.
    tablaIgre.innerHTML = '' //da bi se pomerala zmija unapred a da ne vuce prethodne delove za sobom i ostavlja trag
    drawSnake(tablaIgre)
    drawFood(tablaIgre)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || samaSebe()
}