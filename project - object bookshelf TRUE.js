//Project: Bookshelf by Yiriandur
//Note from author: Thisone was DIFFICULT to figure out. Ihe i%4 I had to get from a tutorial of this assignment on https://www.youtube.com/watch?v=KmXBDf2D9Qg, the rest I figured out on my own.

// An array of books (at least 5  to make them appear down the canvas)
// Add author property to each book - displaying the author below the title.
// Add a new property to each object to store a color, using the color command, and use that to fill each book differently.
// Add a boolean property to each book (like whether you would recommend it to friends).
var book = [
{   title: "The Giver",
    author: "Lois Lowry",
    recommend: false,
    stars: 1,
    color: random(color(100))
},
{   title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    recommend: true,
    stars: 4,
    color: random(color(100))
}, 
{   title: "Harry Potter",
    author: "J.K. Rowling",
    recommend: false,
    stars: 1,
    color: random(color(100))
},
{   title: "The Origin of Species",
    author: "Charles Darwin",
    recommend: true,
    stars: 4,
    color: random(color(100))
}, 
{   title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    recommend: true,
    stars: 3,
    color: random(color(100))
},
{   title: "The Hobbit",
    author: "J.R.R. Tolkien",
    recommend: true,
    stars: 3,
    color: random(color(100))
},
{   title: "David Copperfield",
    author: "Charles Dickens",
    recommend: true,
    stars: 3,
    color: random(color(100))
},
{   title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    recommend: true,
    stars: 3,
    color: random(color(100))
},
{   title: "Robinson Crusoe",
    author: "Daniel Defoe",
    recommend: true,
    stars: 4,
    color: random(color(100))
},
{   title: "The Call of Chtulhu",
    author: "H.P. Lovecraft",
    recommend: true,
    stars: 4,
    color: random(color(100))
}
];

// storage of images
var Star = getImage("cute/Star");
var Heart = getImage("cute/Heart");
var Minus = getImage("space/minus");

// Y variables
var shelfY = 0;
var bookX = 0;
var bookY = shelfY - 100;

// Use a loop to display a row of books.
// Think about how you can draw the row of books down the canvas on lower shelves using conditionals and/or the % operator to do that:
// Did the above putting a new variable shelfY outside, and the draw code for the shelf inside the loop.
for(var i = 0; i < book.length; i++){
    // Use the below for() loop to draw multiple shelves down the canvas. 
    if(i % 4 === 0){
        shelfY += 120;
        fill(173, 117, 33);
        rect(0, shelfY, width, 10);
        bookX = 10;
        bookY += 120; 
        //if i remainder 4 is 0 (so if there are 4 books on the shelf), the loop wraps around itself changing the shelf & book x&y, resetting bookX, and lowering bookY and shelfY by 120.
    }
    // Draws book with all info.
    // Rectangle with the color command
    fill(book[i].color);
    rect(bookX, shelfY - 100, 90, 100);
    bookX += 95;
    // Textcolor
    fill(0, 0, 0);
    // Title
    textSize(12);
    text(book[i].title, bookX - 90, shelfY - 90, 80, 100);
    // Author
    textSize(10);
    text(book[i].author, bookX - 90, shelfY - 55, 80, 100);

    // Draws stars (up to 4) for review.
    for (var s = 0; s < book[i].stars; s++) {
        image(Star, bookX + (s * 20 - 90), shelfY - 30, 20, 30);
    }
    
    // Use a conditional inside the loop to draw something different depending on whether the boolean recommendation is true or false.
    if(book[i].recommend === true){
        image(Heart, bookX - 30, shelfY - 50, 20, 35);
    } else if (book[i].recommend === false){
        textSize(20);
        image(Minus, bookX - 30, shelfY - 50, 40, 35);
    }
} // This line closes the draw book for loop.

/*
Assignment:
What are your favorite books? Make a shelf of them!

1. This program only displays one book. Make an array of books (at least two of them), and use a loop to display a row of them.
2. Add an author property to each book, and display the author below the title.
3. Add a new property to each object to store a color, using the color command, and use that to fill each book differently. (Or maybe store an image?)
4. Add a boolean property to each book (like whether you would recommend it to friends), and use a conditional inside the loop to draw something different depending on whether the boolean is true or false.
5. Now add more books, and use the loop to draw more shelves down the canvas. Think about how you can use conditionals and/or the % operator to do that.
*/
