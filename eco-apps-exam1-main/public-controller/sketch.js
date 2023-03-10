const URL = `http://${window.location.hostname}:8080`;
let socket = io(URL, {
    path: '/real-time'
});

let leftButton
let rightButton

function setup() {
    createCanvas(windowWidth, windowHeight);
    leftButton = {
        x: windowWidth / 4,
        y: windowHeight / 2,
        diameter: 150,
        direction: 'LEFT',
        isPressed: false
    }
    rightButton = {
        x: windowWidth / 4 * 3,
        y: windowHeight / 2,
        diameter: 150,
        direction: 'RIGHT',
        isPressed: false
    }
}

function draw() {
    background(0, 50)
    renderButton(leftButton)
    renderButton(rightButton)
}

function renderButton(button) {
    fill(0, 0, 255)
    circle(button.x, button.y, button.diameter)
}

function buttonPressed(button) {
    if (dist(mouseX, mouseY, button.x, button.y) <= button.diameter / 2) {
        button.isPressed = true
        sendDirection(button)
    }
}

function buttonReleased(button) {
    button.isPressed = false
    return button.isPressed
}

function mousePressed() {
    buttonPressed(leftButton)
    buttonPressed(rightButton)
}



function mouseReleased() {
    buttonReleased(leftButton)
    buttonReleased(rightButton)
    let buttonNotReleased = null;
    if (!buttonReleased(leftButton) && !buttonReleased(rightButton)) {
        /*___________________________________________

        1) Emit a message when the user is not tapping at any button
        _____________________________________________ */
            buttonNotReleased = button; 
            buttonNotReleased.isPressed = false;
            let message = buttonNotReleased.isPressed;

            socket.emit('notReleased', message);

    }
}

/*___________________________________________

2) Create a function that includes the socket method to emit the directions
_____________________________________________ */
let rigth = null;
let left = null;

function sendDirection() {
    //pressed = true; 
    //rigth = rightButton.pressed; 
    //left = leftButton.pressed; 
    if (!buttonReleased(leftButton)){
        left = leftButton.isPressed;
        socket.emit('directions', left)
    } else if(!buttonReleased(rightButton)){
        rigth = leftButton.isPressed;
        socket.emit('directions', rigth)
    }
}