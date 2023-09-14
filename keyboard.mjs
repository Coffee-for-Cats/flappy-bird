export const keyDown = {}

document.addEventListener("keypress", (e) => {
    keyDown[e.key] = true;
})

document.addEventListener("keyup", (e) => {
    keyDown[e.key] = false;
})