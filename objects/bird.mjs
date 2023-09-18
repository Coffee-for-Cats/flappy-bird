import { ctx, canvas } from '../main.mjs';

const image = document.createElement("img");
image.src = "./assets/bird.png";

const birdAirFriction = 6; // %

export const bird = {
    x: 80, y: 40,
    speedX: 4, speedY: 0,
    image,

    alive: function () {
        bird.speedY += .6;
        //const speedSignal = bird.speedY < 0 ? -1 : 1;
        bird.speedY = bird.speedY * (100 - birdAirFriction) / 100;
        bird.y += bird.speedY;

        ctx.drawImage(bird.image, bird.x, bird.y);
    },

    contacts: function (object) {
        if (object.image === image) return false

        const limitX = this.x + this.image.width;
        const limitY = this.y + this.image.height;

        const touchesX = limitX >= object.x + falseGap &&
            limitX <= (object.x + object.image.width - falseGap);
        const touchesY = limitY >= object.y + falseGap &&
            limitY <= (object.y + object.image.height - falseGap);
        return touchesX && touchesY;
    }
}

const falseGap = 5;

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        bird.speedY -= 20;
    }
})

document.getElementById("main").addEventListener("click", (e) => {
    bird.speedY -= 20;
})