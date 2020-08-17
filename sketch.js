// var angle = 0;

// var slider;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     // createCanvas(400, 400);
//     slider = createSlider(0, TWO_PI, PI / 4, 0.01);

// }

// function draw() {
//     background(51);
//     angle = slider.value();
//     stroke(255);
//     translate(windowWidth / 2, height);
//     // translate(200 , height);
//     branch(350);
// }

// function branch(len) {
//     line(0, 0, 0, -len);
//     translate(0, -len);
//     if (len > 4) {
//         push();
//         rotate(angle);
//         branch(len * 0.67);
//         pop();
//         push();
//         rotate(-angle);
//         branch(len * 0.68);
//         pop();
//     }
//     // line(0, 0, 0, -len*0.67);

// }

// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 108;
var val = 0.50;
var intival = 180;
var inc = 1.5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    stroke(255, 255, 0, 100);
}

function draw() {
    background(0, 120);
    angle += inc; //slider.value();
    translate(width / 2, height / 2 + intival / 2);
    branch(intival);
    if (angle >= 120 || angle <= 24) {
        inc *= -1;
    }
}

function branch(len) {

    if (len > 1.5) {
        push();
        rotate(angle);
        line(0, 0, 0, -len);
        translate(0, -len);
        branch(val * len);
        pop();
        push();
        line(0, 0, 0, -len);
        translate(0, -len);
        branch(val * len);
        pop();
        push();
        rotate(-angle);
        line(0, 0, 0, -len);
        translate(0, -len);
        branch(val * len);
        pop();
    }

    //line(0, 0, 0, -len * 0.67);
}