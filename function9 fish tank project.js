//Project: fish bowl.

//Project: Fish Tank by Yiriandur

/*
Instructions:
This program draws a single fish. Poor lonely fish! For this project, you'll use functions to accompany him with more fish of all different shapes and colors.

1. Create a custom function (like drawFish) that draws a fish at a given x and y with a given length, height, and color (5 parameters), using the starter code.
Call that function to draw the fish.
2. Now call that function lots more times, with different values, so your screen is filled with fish.
3. Add more parameters to the function, like tail width, eye size, tail color - more ways that you can make each fish different from each other.
4. Bonus: Add seaweed to the tank, and make a function to draw it at different places and heights. Or add pebbles to the bottom. Or a bubble drawing function.
5. Bonus: Want to make it interactive? Use a mouseClicked function to add more fish wherever the user clicks.
Don't like fish? You could also make a pet shop, maybe using your animal code from the Design-an-Animal project, or a car shop, using rectangles. The important thing is to use functions to make your drawing code reusable.
*/

//note from creator: click on canvas to draw more fish with random sizes and colors wherever you click.

background(69, 212, 255);

//Fish Variables
    var centerX = 200; 
    var centerY = 200;
    var bodyLength = 75;
    var bodyHeight = 30;
    var tailWidth = 15;
    var tailHeight = 30;
    var eyeSize = 5;
    var bodyColor = color(45, 145, 45);
    var tailColor = color(255, 0, 255);
    
//Pebble Variables
    var pebL = 20;
    var pebH = pebL/2;
    var pebbleColor = color(138, 0, 0);
    
var drawFish = function(centerX,centerY,bodyLength,bodyHeight,tailWidth,tailHeight,eyeSize,bodyColor,tailColor){
    //fish with bubbles. bubbles drawn at end of function.
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(tailColor);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
    
    //bubbles
    stroke(0, 0, 0);
    noFill();
    var bubbleSize = 10;
    ellipse(centerX+31, centerY+-12, bubbleSize-5, bubbleSize-5);
    ellipse(centerX+40, centerY+-20, bubbleSize, bubbleSize);
    ellipse(centerX+30, centerY+-35, bubbleSize-3, bubbleSize-3);
    ellipse(centerX+34, centerY+-24, bubbleSize+5, bubbleSize+5);

};

var drawSeaweed = function(){
    noStroke();
    fill(1, 94, 20);
    //seaweed1
    beginShape();
    curveVertex(170, 20);
    curveVertex(162, 143);
    curveVertex(147, 210);
    curveVertex(143, 328);
    curveVertex(130, 400);
    curveVertex(262, 216);
    endShape();
    //seaweed2
    beginShape();
    curveVertex(70, 20);
    curveVertex(62, 143);
    curveVertex(47, 210);
    curveVertex(43, 328);
    curveVertex(30, 400);
    curveVertex(62, 216);
    endShape();
    //seaweed3
    beginShape();
    curveVertex(270, 20);
    curveVertex(247, 143);
    curveVertex(247, 210);
    curveVertex(243, 328);
    curveVertex(249, 400);
    curveVertex(197, 216);
    endShape();
    //seaweed1
    beginShape();
    curveVertex(370, 20);
    curveVertex(362, 143);
    curveVertex(347, 225);
    curveVertex(343, 308);
    curveVertex(330, 400);
    curveVertex(362, 216);
    endShape();
};

var drawPebble = function(pebL,pebbleColor){
    var pebX = random(5,395);
    var pebY = random(350,395);
    noStroke();
    fill(pebbleColor);
    ellipse(pebX, pebY, pebL, pebH);
};

//actually drawing the fish tank:

//pebbles
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
drawPebble(random(10,20),color(random(0,255), random(0,255), random(0,255)));
//seaweed
drawSeaweed();
//fish
drawFish(centerX,centerY,bodyLength,bodyHeight, tailWidth, tailHeight, eyeSize,bodyColor,tailColor);
drawFish(random(5,395),random(5,395),random(50,100),random(10,50), random(5,25), random(5,60),random(1,10),color(random(0,255), random(0,255), random(0,255)),color(random(0,255), random(0,255), random(0,255)));
drawFish(random(5,395),random(5,395),random(50,100),random(10,50), random(5,25), random(5,60),random(1,10),color(random(0,255), random(0,255), random(0,255)),color(random(0,255), random(0,255), random(0,255)));
drawFish(random(5,395),random(5,395),random(50,100),random(10,50), random(5,25), random(5,60),random(1,10),color(random(0,255), random(0,255), random(0,255)),color(random(0,255), random(0,255), random(0,255)));

mouseClicked = function(){
    drawFish(mouseX,mouseY,random(50,100),random(10,50), random(5,25), random(5,60),random(1,10),color(random(0,255), random(0,255), random(0,255)),color(random(0,255), random(0,255), random(0,255)));
};

/*
auth Stephen Waltz
I like what you've done so please note that the following are observations meant neither as recommendations or criticisms.
Drawing the bubbles in drawFish makes it easy to place them near the associated fish.
You can accomplish the same thing by creating a drawBubbles function and calling it from drawFish.
There's no good reason to do that here because only the fish blow bubbles, but it would make sense if you had something else blowing bubbles. 
(This example uses Unicode which is not fully supported by all systems.)
var drawBubbles = function(centerX, centerY, bubbleSize) {
    ellipse(centerX+31, centerY+-12, bubbleSize-5, bubbleSize-5);
    ellipse(centerX+40, centerY+-20, bubbleSize, bubbleSize);
    ellipse(centerX+30, centerY+-35, bubbleSize-3, bubbleSize-3);
    ellipse(centerX+34, centerY+-24, bubbleSize+5, bubbleSize+5);    
};
var blowfish = "🐡";
//textAlign(CENTER);
textSize(100);
text(blowfish, 200, 150);
drawBubbles(200 - 25, 100, 10);

You use the same random parameters repeatedly in several instances.
You may not have learned loops (if not you will soon) but I think you will find them really useful.
var numberRandomFish = 3;
for (var i = 0; i < numberRandomFish; i++) { // draws 3 random fish
    drawFish(random(5,395),random(5,395),random(50,100),random(10,50), random(5,25), random(5,60),random(1,10),color(random(0,255), random(0,255), random(0,255)),color(random(0,255), random(0,255), random(0,255)));
}
*/
