//Yiriandur's Star Catch (or the end of the Universe as we know it due to bad programming?)

//Okay so probably should clarify that it's way too late at night at the moment of finishing this, and that i wanted too badly to create something that would keep me from sleeping, so please don't judge too harshly. :x Thanks

var xPos = 36;
var yPos = 29;
var xMoon = 350;
var yMoon = 50;


draw = function() {

    background(29, 40, 115);
    fill(255, 242, 0);
    noStroke();
    
    //background fixed starry sky
    ellipse(50, 50, 5, 5);
    ellipse(150, 50, 5, 5);
    ellipse(50, 250, 5, 5);
    ellipse(90, 230, 5, 5);
    ellipse(250, 370, 5, 5);
    ellipse(320, 290, 5, 5);
    ellipse(320, 90, 5, 5);

    //Falling stars 2x
    ellipse(xPos, yPos, 10, 10); //star1
    ellipse(90, yPos + 140, 10, 10); //star2
    
    xPos += 3;
    yPos += 3;

    //Falling moon (is it the apocalypse?!)
    arc(xMoon, yMoon, 100, 100, 120, 480);  
    
    xMoon -= 1;
    yMoon += 1;
    
    //Bad attempt at making a cannon to catch the falling... everything!
    stroke(18, 1, 1);
    fill(84, 9, 9);
    ellipse(xPos, 320, 10, 10); //cannon ball
    ellipse(xPos - 15, 320, 10, 10); //cannon ball
    ellipse(xPos - 20, 320, 10, 10); //cannon ball
    
    ellipse(29, 320, 20, 20); //cannon end
    rect(29, 310, 40, 20, 5); //cannon body

};




