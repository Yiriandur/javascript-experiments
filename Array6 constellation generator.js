//challenge: constellation generator

//array of x positions of stars
var xPositions = [100, 200];
//array of y positions of stars
var yPositions = [200, 300];

//function that draws stars, drawing on array lengths of both xPos and yPos, using an extra var i = 0 to counter.
var drawStars = function() {
    background(9, 5, 59);
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
    }
};

//add a mouseclicked function making a star appear wherever. when there is no function yet, you can move everything into a draw function. but now its just handier to create a new function.
mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    drawStars();
};