//import './keyboard.mjs'
import { bird } from './objects/bird.mjs'
import { invokeDoublePipes, interPipeGap } from './objects/pipes.mjs';
import { sleep, outOfBounds } from './tools.mjs'

export const canvas = document.getElementById("main");
export const ctx = canvas.getContext('2d');
export const scene = [bird];

const score = document.querySelector('#score');

let x = 0;
window.requestAnimationFrame(render);
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    sleep("putPipes", interPipeGap.gap, function () {
        const { myPipeFloor, myPipeCeil } = invokeDoublePipes();
        scene.push(myPipeFloor); scene.push(myPipeCeil);
    })

    for (let i = 0; i < scene.length; i++) {
        const object = scene[i];
        if (bird.contacts(object) || outOfBounds(bird)) gameOver();
        if (outOfBounds(object)) {
            scene.splice(i, 1);
        }
    }
    
    scene.forEach(obj => obj.alive());

    x++;
    canvas.style.backgroundPosition = `${-x}px 0px`;

    // score
    const cutScore = Math.floor(x / interPipeGap.gap) - 1;
    score.textContent = cutScore < 0 ? 0 : cutScore;

    requestAnimationFrame(render);
}

function gameOver() {
    scene.splice(0);
    alert("Game Over!");
    location.reload();
}