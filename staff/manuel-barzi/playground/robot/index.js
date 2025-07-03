import { Robot } from './Robot.js';
console.log('hola mundo');
const robot = new Robot("east");
console.log(robot);
const robotImage = document.createElement('img');
robotImage.src = "robot.png";
robotImage.style.width = "100px";
robotImage.style.position = "absolute";
robotImage.style.left = `${robot.x}px`;
robotImage.style.top = `${robot.y}px`;
document.body.appendChild(robotImage);
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowDown":
            robot.backward();
            break;
        case "ArrowUp":
            robot.forward();
            break;
        case "ArrowLeft":
            robot.left();
            break;
        case "ArrowRight":
            robot.right();
            break;
    }
    console.debug(robot);
    robotImage.style.left = `${robot.x}px`;
    robotImage.style.top = `${robot.y}px`;
    if (robot.orientation === "north")
        robotImage.style.rotate = "-90deg";
    else if (robot.orientation === "east")
        robotImage.style.rotate = "0deg";
    else if (robot.orientation === "south")
        robotImage.style.rotate = "90deg";
    else if (robot.orientation === "west")
        robotImage.style.rotate = "180deg";
});
