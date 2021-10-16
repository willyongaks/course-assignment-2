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

const liElement = document.querySelector(".games");
liElement.innerHTML += "<li><a> Grand Theft Auto : 4.48 </a></li>";
liElement.innerHTML += "<li><a> Portal 2         : 3.5 </a></li>";
liElement.innerHTML += "<li><a> Team Fortress    : null </a></li>";
liElement.innerHTML += "<li><a> The Witcher      : 3.0 </a></li>";
liElement.innerHTML += "<li><a> The Elder Scrolls : 2.9 </a></li>";






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
//Create a function that accepts two arguments.

//Inside the function, try to convert the arguments to numbers.
//If either of the arguments cannot be converted to a number, return the value: "Invalid argument(s)".
//If both arguments are number values or can be converted to number values, subtract the second argument from the first and return the result from the function.
//Call the function, pass in to two values and assign the return value to be the innerHTML value of the element with the id subtraction.
//Test your function with the following value pairs: (1, 42), (200, 150), (10, "50"), ("100", "400"), ("Ten", "One Hundred"), (null, 123);



//answer 5

function convertToNumbers(a,b){

}


//Question 6

//Select the button with the class page. *done
//When the button is clicked do the following:
//Change the title of the page(the value of the title element
// in the head) to "Updated title". *DONE
//Change the background colour of the whole page to "yellow".
//Change the color of the h1 element to "green". *DONE
//Change the h1 element's font to "impact". *DONE
//Change the value of the h1 element to be a link.
//Remove the list style and padding from the ul element.
//The h1 element should look like this after the click event:

//<h1><a href="#">Programming Foundations Course Assignment</a></h1>


//answer 6

 var button = document.querySelector(".page");
 var title = document.querySelector("h1")
 var body = document.querySelector("body")
 var ul  = document.querySelector(".games")




 button.onclick = function(){
     title.innerHTML ="updated title"
     title.style.fontFamily = "impact"
     //title.innerHTML = "<h1><a href=""> Programming Foundations Course Assignment </a></h1>"
     body.style.backgroundColor = "yellow"
     ul.style. textdecoration = "none"

 }

//Question 7
//Select the button with the class price. *DONE
//When the button is clicked, loop through the array below, 
//add all the prices and assign the total to be the innerHTML 
//value of the element with the id total.

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];


//answer

var buttonPrice = document.querySelector(".price");

var total = toys

buttonPrice.onclick = "total"