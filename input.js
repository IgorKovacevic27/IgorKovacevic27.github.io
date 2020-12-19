let inputPravac = { x: 0, y: 0 } //defaultno ne zelimo da nam se zmija pomera bilo gde
let zadnjiInputPravac = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        
        case 'ArrowUp':
            if (zadnjiInputPravac.y !== 0) break //ako vec idemo dole ne moze gore
            inputPravac = { x: 0, y: -1 } //-1 nas salje na gore
            break
        case 'ArrowDown':
            if (zadnjiInputPravac.y !== 0) break //ako vec idemo gore ne moze dole
            inputPravac = { x: 0, y: 1 } 
            break
        case 'ArrowLeft':
            if (zadnjiInputPravac.x !== 0) break //ako vec idemo desno ne moze levo
            inputPravac = { x: -1, y: 0 } 
            break
        case 'ArrowRight':
            if (zadnjiInputPravac.x !== 0) break //ako vec idemo levo ne moze desno
            inputPravac = { x: 1, y: 0 } 
            break
    }
})

export function getInputDirection(){
    zadnjiInputPravac = inputPravac
    return inputPravac;
}