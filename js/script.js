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
//Console log the value of the counter variable 
//inside the loop only if it's equal to 17 or 20.

//answer 2
for (var  i = 15; i<=25; i++) {
    counterVariable1 = 17;
    counterVariable2 = 25;
    
    equal = (counterVariable1, counterVariable2)
    if ( i === equal)
    console.log(i);
}



//question 3
//Loop through the array below and add an li item to the ul element
// in the HTML containing the title and rating of each game only if 
//the rating for the game is below 3.5.
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

const liElement = document.querySelector(".games")





//question 4

//Create a function called whatIDontLike that accepts one argument.
//Inside the function, check if the argument has a string value.
//If it doesn't log the message "Please send in a string".
//If the argument is a string value, log the message "I don't like " together with the argument.
//Call the function and pass in a value of your choice.


//answer 4


function whatIDontLike(value) {
    const datatype =typeof value;
    if(datatype === "string"){
        console.log("I don't like" + " " + value);

    }
    else{
        console.log("Please send in a string")
    }

}

whatIDontLike("insects")



//question 5
//