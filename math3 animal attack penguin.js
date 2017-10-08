//Shock and Awe of the Penguin by Yiriandur
//Press your mouse button on the canvas to animate.
//Image recreated after original googled image http://students.cs.uri.edu/~forensics/courses/CSC106/assignments/animal.png

noStroke();

var bodyX = 200;
var bodyY = 200;
var bodyWidth = 150;
var faceWidth = bodyWidth/2;
var bodyHeight = 150;
var faceHeight = bodyHeight/2;
var eyeWidth = (faceWidth*1/2);
var eyeHeight = (faceHeight*1/2);
var pupilSize = 10;
var mouthTop = bodyY-60;
var mouthBottom = bodyY-40;
var mouthWidthL = bodyX-faceWidth/4;
var mouthWidthR = bodyX+faceWidth/4;
var feetTop = bodyY+60;
var feetBottom = bodyY+75;
var leftFootWidthL = bodyX-bodyWidth/5;
var leftFootWidthR = bodyX-bodyWidth/5;
var rightFootWidthL = bodyX+bodyWidth/5;
var rightFootWidthR = bodyX+bodyWidth/5;

draw = function() {
    fill(255, 255, 255);
    background(190, 249, 250); //blue sky
    ellipse(50, 50, 10, 10); //snowflake 1
    ellipse(100, 102, 10, 10); //snowflake 2
    ellipse(150, 26, 10, 10); //snowflake 3
    ellipse(200, 73, 10, 10); //snowflake 4
    ellipse(250, 118, 10, 10); //snowflake 5
    ellipse(300, 52, 10, 10); //snowflake 6
    ellipse(350, 158, 10, 10); //snowflake 7
    rect(0, 200, 400, 200); //icy ground

    // face
    fill(36, 53, 240);
    ellipse(bodyX, bodyY-70, faceWidth, faceHeight); 

    //body
    fill(36, 53, 240);
    ellipse(bodyX, bodyY, bodyWidth, bodyHeight); //back blue circle
    fill(255, 255, 255);
    ellipse(bodyX, bodyY, bodyWidth-50, bodyHeight); //smaller white circle
    
    // eyes
    fill(255, 255, 255);
    ellipse(bodyX-faceWidth*1/5, bodyY-70, eyeWidth, eyeHeight);
    ellipse(bodyX+faceWidth*1/5, bodyY-70, eyeWidth, eyeHeight);    
    
    //pupils 
    fill(0, 0, 0);
    ellipse(bodyX-faceWidth/4, bodyY-70, pupilSize, pupilSize); //x is (200 (x of face) - 160 (x of eye))/160 (facesize) = 1/4. y is centre eyes.
    ellipse(bodyX+faceWidth/4, bodyY-70, pupilSize, pupilSize); //x is (240-200)/160 = 1/4. y is centre eyes.
    
    //mouth
    fill(255, 119, 0);
    triangle(mouthWidthL, mouthTop, mouthWidthR, mouthTop, bodyX, mouthBottom);

    //feet
    fill(255, 119, 0);
    triangle(leftFootWidthL, feetBottom, leftFootWidthR, feetTop, bodyWidth-20, feetBottom);
    triangle(rightFootWidthL, feetBottom, rightFootWidthR, feetTop, bodyWidth+120, feetBottom);
    
mousePressed = function() { 
    pupilSize = pupilSize+2;
};

};
