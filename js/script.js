//question 1

//Create a variable called outOfStock and assign it a boolean value.
//Create an if else statement that checks the value of outOfStock.
//If it is true, console log "Out of stock". Otherwise log "In stock".


//answer 1
var outOfStock = true;

if (outOfStock ===true){
    console.log("in stock")
}
else {
    console.log("Out of stock")
}


//question 2

//Create a for loop that counts from 15 to 25
//Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

//answer 2
for (var  i = 15; i<=25; i++) {
    if (i === 17 && 20)
    console.log(i);
}



//question 3
//Loop through the array below and add an li item to the ul element in the HTML containing the title and rating of each game only if the rating for the game is below 3.5.
//If a game is unrated, exclude it from the list.





var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

for (var i=0; i<= games.length; i++){

    var title = document.createElement("li")
    var rating = document.createElement("li")

    console.log("")
}