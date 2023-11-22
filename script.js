
const board = document.querySelector('.board')

let snakex = 5
let snakey = 10
let foodx = 10
let foody = 20
let gamestart
let body = []
let velocityx = 0
let velocityy = 0

const changedirection = (e) => {
    console.log(e)
    if (e.key === 'ArrowUp') {
        velocityx = 0
        velocityy = -1
    }
    else if (e.key === 'ArrowDown') {
        velocityx = 0
        velocityy = 1
    }
    else if (e.key === 'ArrowRight') {
        velocityx = 1
        velocityy = 0
    }
    else if (e.key === 'ArrowLeft') {
        velocityx = -1
        velocityy = 0
    }
}
const getrandom = () => {
    let x = Math.floor(Math.random() * 40) + 1
    let y = Math.floor(Math.random() * 40) + 1
    foodx = x
    foody = y

}

const init = () => {
    let html = `<div class="food" style="grid-area: ${foody}/${foodx}"></div>`
    if (snakex == foodx && snakey == foody) {
        body.push(foodx, foody)
        getrandom()
    }
    for (let i = body.length - 1; i > 0; i--) {
        body[i] = body[i - 1]
    }
    body[0] = [snakex, snakey]

    snakex += velocityx
    snakey += velocityy
    if (snakex == -1 || snakex == 41 || snakey == -1 || snakey == 41) {
        clearInterval(gamestart)
        alert("Game over")
        location.reload()
    }
    for (let i = 0; i < body.length; i++) {
        html += `<div class="head" style="grid-area: ${body[i][1]}/${body[i][0]}"></div>`
    }
    board.innerHTML = html
}
getrandom()
gamestart = setInterval(init, 125)

document.addEventListener('keydown', changedirection)


