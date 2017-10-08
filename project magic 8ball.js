//Magic 8-Ball by Yiriandur
//See documentation and assignment description below code.
//Some quotes from popular media such as 2001: A space odysee and Portal.

//Click mouse on canvas to have the Magic 8-ball answer your question.

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(0, 9));
if (answer < 1) {
    fill(217, 209, 227);
    textSize(20);
    text("NO", 183, 183);
    text("DICE", 174, 211);
    textSize(10);
    text("TRY AGAIN", 170, 243); 
    text("IF YOU VALUE YOUR LIFE", 136, 264);
}
else if (answer < 2) {
    fill(255, 0, 0);
    textSize(20);
    text("42", 188, 200);
    textSize(9);
    text("YOUR ANSWER TO LIFE,", 149, 229); 
    text("THE UNIVERSE, AND", 155, 250);
    text("EVERYTHING", 173, 270);
}
else if (answer < 3) {
    fill(0, 255, 221);
    textSize(40);
    text("YES", 163, 238);
}
else if (answer < 4) {
    fill(12, 148, 0);
    textSize(40);
    text("NO", 171, 238);
}
else if (answer < 5) {
    fill(255, 0, 0);
    textSize(20);
    text("ABORT", 165, 195);
    textSize(10);
    text("HIGH", 191, 215);
    text("PROBABILITY OF", 158, 236);
    text("FAILURE PREDICTED", 148, 256); 
}
else if (answer < 6) {
    fill(166, 171, 24);
    textSize(12);
    text("CHECK YOUR", 161, 219);
    text("HOROSCOPE TODAY", 141, 249); 
}
else if (answer < 7) {
    fill(0, 0, 0);
    textSize(15);
    text("I'M GOING", 165, 200);
    text("TO KILL YOU", 155, 225);
    textSize(9);
    text("AND ALL THE CAKE IS GONE", 138, 266);
}
else if (answer < 8) {
    fill(255, 0, 0);
    text("I'M SORRY,", 170, 195);
    text("DAVE",184,214);
    textSize(10);
    text("I'M AFRAID I CAN'T DO THAT", 132, 266); 
}
else if (answer < 9) {
    fill(255, 0, 0);
    textSize(20);
    text("JUST", 175, 211);
    text("DO IT", 174, 244); 
}

mouseClicked = function() {
    // Restart the program whenever the user clicks the mouse
    Program.restart();
};

/*
Original code:
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer > 0) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
}

Assignment
In the logic challenges, you practiced if and else. Now, use that knowledge to program a magic 8-ball, so you can ask your programs for answers to all your deepest life questions.

1. Change the if() so it checks if the answer variable is a certain number. Click restart until you see the answer.
2. Add else if statements to check for all the possible values of the number. For each one, show a different message. For easy testing of particular answers, you can add a line like 'var answer = 1' below the line that generates a random numbers, and remove it when you're done. Then click restart and test it!
3. Bonus: Change the color for different answers or illustrate them somehow.
*/
