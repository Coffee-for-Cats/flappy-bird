import { canvas } from './main.mjs';

const timers = {}

export function sleep(timer, time, callback) {
    if (!timers[timer]) timers[timer] = 0;

    if (timers[timer] > time) {
        // console.log("callback called")
        timers[timer] = 0;
        return callback();
    } else {
        timers[timer] += 1;
    }
}

export function outOfBounds(obj) {
    if (obj.x <= 0 - obj.image.width) return true
    if (obj.y <= 0 - obj.image.height) return true

    if (obj.x >= canvas.width + obj.image.width) return true
    if (obj.y >= canvas.height + obj.image.height) return true
}