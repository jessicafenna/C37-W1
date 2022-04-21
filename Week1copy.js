// DotNotation Activities
console.log ("   |   |   \n   |   |  \n   |   |   \n ---------\n   |   |   \n   |   |  \n   |   |   \n ---------\n   |   |   \n   |   |  \n   |   |    ")

// Variables Activities
// Activity 1 
// variables listing with back tick
let name = `Jessica`
let age3 = `30`
let favouriteColour = `orange`

console.log(`My name is ${name}, I am ${age3} and my favourite colour is ${favouriteColour}`);

// Stretch - update a variable 
name = `Judith`
console.log(`My name is ${name}, I am ${age3} and my favourite colour is ${favouriteColour}`);

// Activity 2
let breakfast = `cereal`
let lunch = `salad`
let dinner = `curry`

console.log (`Today I ate ${breakfast}, ${lunch}, ${dinner}`);
// update 
breakfast = `toast`
lunch = `soup`
dinner = `salad`

console.log (`Tomorrow I will eat ${breakfast}, ${lunch}, ${dinner}`);

// Activity 3
// countdown to next birthday
let today = new Date
let birthday = Date.parse ("2023, 03,12")

let countdown = ((birthday - today))/ (1000*60*60*24);

console.log(Math.floor(countdown));

// count from date of birth to today
let today1 = new Date
let birthday1 = Date.parse ("1992, 03,12")

console.log(Math.floor((today1 - birthday1)/ (1000*60*60*24)));

// Activity 4 
let space1 = `X`
let space2 = `0`
let space3 = ``
let space4 = `X`
let space5 = `X`
let space6 = ``
let space7 = `0`
let space8 = ``
let space9 = ``

console.log (`  
   |   |   \n 
${space1}  | ${space2} | ${space3} \n 
   |   |   \n
-----------\n 
   |   |   \n
 ${space4} | ${space5} | ${space6} \n 
   |   |   \n
-----------\n  
   |   |   \n 
 ${space7} |  ${space8} | ${space9} \n 
   |   |   \n
 `)

// IfSwitchActivities
// // Activity 1

let age = 17    

if (age > 17) { 
    console.log("Yes, I can serve you")
}
else {
    console.log ("You aren't old enough")
}

// Stretch
let age2 = 18
let country = "Brazil"  

if (age2 > 17 && country =="UK") { 
    console.log("Yes, I can serve you")
}
else {
    console.log ("I can't serve you.")
}

// Activity 2 

let topping = "cheese"

switch (topping){ 
    case "pineapple":
    console.log(`${topping} should not be on a pizza.`);
    break;
    case "cheese": 
    console.log(`${topping} is an important ingredient on a pizza.`);
    break;
    case "jalapeno":
    console.log (`I don't mind ${topping} on a pizza`);
}

// Activity 3
 
let password = `password`;
len = password.length;
if (len < 8)
{
    console.log("Password is too short");
}
else {
    console.log(`${password}`)
};

// Activity 4 
let num = 3; 

if(num %3== 0 || num%5 ==0){ 
    console.log(`${num} is divisible by 3 or 5`)
}
else{ 
    console.log (`${num} is not divisible by 3 or 5`)
};

// Activity 5 
let num = 15; 

if (num%3 ==0 && num%5!=0){ 
    console.log(`Fizz`)
}
if (num%3!=0 && num%5==0){ 
    console.log (`Buzz`)
}
if (num%3==0 && num%5==0){ 
    console.log (`Fizz Buzz!`)
}

// Activity 6 
let palNum = 1233;
let revPalNum = palNum.toString().split("").reverse().join("");

if (palNum == revPalNum){
    console.log(`${palNum} is a palindrome`)
}
else {
    console.log (`${palNum} is not a palindrome.`) 
}

// Activity 7 
let time = 8; 
let placeofWork =  `office`; 
let townofHome = `Wirral`; 

if (time <8){
    console.log(`The time is ${time} and I am in ${townofHome}.`)
}
else if (time >=8){ 
    console.log (`The time is ${time} and I am commuting.`)
}
else if (time >8 && time <=17){ 
    console.log (`The time is ${time} and I am at the ${placeofWork}`)
}
else if (time >5 && time <18 ){ 
    console.log(`The time is ${time} and I am commuting`)
}

else if (time >=18 ){ 
    console.log (`The time is ${time} and I am in ${townofHome}`)
}

// Activity 8 
const string8 = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`
console.log(Math.max(string8.lastIndexOf(`a`), string8.lastIndexOf(`e`), string8.lastIndexOf(`i`), string8.lastIndexOf(`o`), string8.lastIndexOf(`u`)))


// // Activity 9 
let word = "word"; 

if (word.charAt((word.length)-1) == word.charAt(0)){ 
    console.log("True")
}
else{ 
    console.log("False")
}

// // Activity 10 
let num1 = 2;
let num2 = 2;

if ((num1+num2)%2 ===0){ 
    console.log(`The sum of ${num1} and ${num2} is even.`)
}
else{ 
    console.log (num1*num2)
};


// Array activities
// // Activity 1 

let favFilms = [ 
    "Film 1",
    "Film 2",
    "Film 3",
    "Film 4",
    "Film 5",
];

favFilms.push ("Film 6","Film 7");
console.log (favFilms);

for (i = 0; i< favFilms.length;i++){
    console.log(favFilms[i])
};

// Activity 2
for (let i = 0; i<6; i++){
    console.log(Math.floor(Math.random()*50))
};

// Activity 3
// count up 
 for (let i = 0; i<10; i++){
     console.log(i)
 }
// count down
 for (let i = 9; i >-1; i--){
    console.log(i)
}

// Activity 4
films = [
    "Film 1", 
    "Film 2",
    "Ghostbusters",
    "Film 4"
];
// list films 
for (i = 0; i<films.length; i++){
    console.log (films[i])
};
// list films and return message if 3rd film is ghostbusters
for (i = 0; i< films.length; i++){
    console.log (films[i])}{
    if (films[2]== "Ghostbusters"){
        console.log ("Yay, it's Ghostbusters!")
    }
    else {console.log ("Boo! We want Ghostbusters")}
};

// // Activity 5 
for (let i = 0; i<6; i++){ 
    console.log(num = Math.floor(Math.random()*30))
    }{
    if (num%7 ==0){
        console.log(`${num} is divisible by 7`)
    }
};

// Activity 6 
let bobsFollowers = [
    "Person 1",
    "Person 2",
    "Person 3",
    "Person 6",
];
console.log (bobsFollowers);
let hannahsFollowers = [
    "Person 2",
    "Person 1",
    "Person 4",
    "Person 5",
];


for (let i = 0; i< bobsFollowers.length; i++)
    for (let j = 0; j < hannahsFollowers.length; j++)
        if (bobsFollowers [i] == hannahsFollowers[j]){
        console.log (`Common follower is ${bobsFollowers[i]}`)
};
// how can I get them to list at same time? - whole loops and THEN list?

// Activity 7 
// do...while loop 
// Do While loop tests condition - executes code in code black at least once even if condition isn't met 
num = 1; 
do
{ 
    console.log("Your number is greater than 10");
} while (num >10);

// problem here is that the console log says the number is greater, even though it isn't, because the code has been cycled through once and THEN tests the condition

//While loop - condition is tested at beginning of loop - executes code in code block only if condition is true
// 
let num3 = 1; 
while (num3>10)
{ 
    console.log ("Your number is greater than 10.")
}

// For loop is used when the number of iterations is already known (unlike while, where number of iterations is not necessarily known). Initialisation happens only once at start (for while loops it cycles through every time loop is iterated). For - iteration statement written at beginning, while - can be written anywhere
for (i = 0; i<10; i++){ 
    console.log(i);
};

let i = 0
while (i<10){ 
     console.log(i);i++;
}
// Functions Activities

// Activity 1 
// Original function 
factorial = n =>{ 
    if ((n ===0) || (n ===1)){ 
        return 1;
    } else {
        return (n*factorial (n-1));
    }
}
console.log(factorial(33));

const factorial = n => { 
    if ((n ===0)|| (n ===1)){ 
        return 1;
    } else { 
        return (n*factorial(n-1));
    }
}
console.log(factorial(33));

// Activity 2
let orderCount = 0;
const takeOrder = (topping,topping2) =>{ 
    orderCount++;console.log(`Pizza with ${topping} and ${topping2}, order number ${orderCount}.`);
}

takeOrder ("pineapple", "cheese");
takeOrder("cheese", "pineapple");
    
// Activity 3
let balance = 500;
let accountNumber = 010101;
let truePin = 0101;

const withdrawcash = (amount,accnum,pin) =>{ 
    if (truePin === pin && accountNumber === accnum && amount<=balance){
        console.log (`Dispensing ${amount} from account ${accountNumber}`);
    }
    else if (truePin != pin){ 
        console.log("Pin is incorrect!");
    }
    else if (accountNumber != accnum){ 
        console.log("Account number is incorrect!")
    }
    else if (amount>balance){ 
        console.log("Funds are insufficient for this transcation.")
    }
};

withdrawcash (amount,accnum,pin);



// Objects Activities
// // Activity 1

const person = { 
    name: "Jessica",
    sayHi(){ 
        return `Hello, my name is ${this.name}`
    }
};
console.log(person.sayHi());

// // Activity 2
const pet = { 
    name: "Lewes", 
    typeOfPet: "cat",
    age: 5,
    colour: "black",
    eat(){ 
        return`${this.name} is eating`
    },
    drink(){ 
        return `${this.name} is drinking`
    }
};
console.log(pet.eat());

// Activity 3 
let drinkOrder = "latte";
let foodOrder = "cake";

const coffeeShop = { 
    branch: "Liverpool",
    drinks: [
        ["coffee", "latte"], [3,3.5]
    ],
    food: [
        ["cake", "sandwich"],
        [3, 3.5]
    ],
    drinkOrdered() { 
        if (drinkOrder == "coffee"){
            console.log( `Your drink order is ${this.drinks [0][0]} at £${this.drinks[1][0]}`);
            return this.drinks [0][1]}
        else if (drinkOrder == "latte"){
            console.log( `Your drink order is ${this.drinks [0][1]} at £${this.drinks[1][1]}`)
            return  this.drinks[1][1];
        }
    },
    foodOrdered(){ 
        if (foodOrder == "cake"){ 
            console.log( `Your food order is ${this.food [0][0]} at £${this.food[1][0]}`)
            return this.food [1][0];
        }else if (foodOrder == "sandwich"){
            console.log( `Your food order is ${this.food [0][1]} at £${this.foodPrice [1][1]}`);
            return this.food [1][1]}
    },
    totalOrdered(){
        return `Your order is ${drinkOrder} and ${foodOrder}. Your order is £${this.drinkOrdered() + this.foodOrdered()}`}
}

console.log(coffeeShop.foodOrdered());

// not sure how to do this without returning an integer in the middle of the else if statements, needs further work 
