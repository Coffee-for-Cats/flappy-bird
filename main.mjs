import { invokeDoublePipes, interPipeGap } from './objects/pipes.mjs';
import { sleep, outOfBounds } from './tools.mjs'
import { bird } from './objects/bird.mjs'

export const canvas = document.getElementById("main");
export const ctx = canvas.getContext('2d');
export const scene = [bird];

const score = document.querySelector('#score');

let distance = -1;
window.requestAnimationFrame(render);
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // sleeps for interPipeGap's frames, and them put 2 pipes on screen.
    sleep("putPipes", interPipeGap.gap, function () {
        const { myPipeFloor, myPipeCeil } = invokeDoublePipes();
        scene.push(myPipeFloor, myPipeCeil);
    })

    // removes objects out of bounds.
    scene.forEach(obj => {
        if (bird.contacts(obj) || outOfBounds(bird)) gameOver();
        if (outOfBounds(obj)) {
            scene.splice(i, 1);
        }
    })
    // execute individual code from each object.
    // needs to be separated, if not, it will execute something already removed
    scene.forEach(obj => obj.alive());

    score();

    requestAnimationFrame(render);
}

function gameOver() {
    scene.splice(0);
    alert("Game Over!");
    location.reload();
}

function score() {
    distance++;
    canvas.style.backgroundPosition = `${-distance}px 0px`;
    // score printing
    const cutScore = Math.floor(distance / interPipeGap.gap);
    score.textContent = cutScore;
}