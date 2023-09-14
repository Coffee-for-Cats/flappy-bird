import { canvas, ctx } from '../main.mjs'
import { bird } from './bird.mjs'

const pipeGap = 200;
export let interPipeGap = { gap: 150};

const pipeFloorImage = document.createElement('img');
pipeFloorImage.src = '../assets/pipeFloor.png'

const pipeCeilImage = document.createElement('img');
pipeCeilImage.src = '../assets/pipeCeil.png'

class pipeFloor {
    constructor() {
        this.image = pipeFloorImage
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - 200) + 150;
    }

    alive() {
        ctx.drawImage(this.image, this.x, this.y);
        this.x -= bird.speedX;
    }
}

class pipeCeil {
    constructor(referenceX, referenceY) {
        this.image = pipeCeilImage;
        this.x = referenceX;
        this.y = referenceY - pipeCeilImage.height - pipeGap;
    }

    alive() {
        ctx.drawImage(this.image, this.x, this.y);
        this.x -= bird.speedX;
    }
}

export function invokeDoublePipes() {
    const myPipeFloor = new pipeFloor();
    const myPipeCeil = new pipeCeil(myPipeFloor.x, myPipeFloor.y)

    return { myPipeFloor, myPipeCeil }
}