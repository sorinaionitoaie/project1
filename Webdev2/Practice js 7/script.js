// // Identify button class-first
// const firstButton = document.body.querySelector('.first')
// const secondButton = document.body.querySelector('.second')

// // 2 check button
// console.log(firstButton);
// console.log(secondButton);

// // 3. adauga click event

// firstButton.addEventListener('click' , function () {
//     console.log('Done');
// })

// // 4. test second
// secondButton.addEventListener('click' , function () {
//     console.log('Like');
// })



const firstSquare = document.querySelector(".firstSquare");
const secondSquare = document.querySelector(".secondSquare");
const thirdSquare = document.querySelector(".thirdSquare");


firstSquare.addEventListener("click", () => {
    firstSquare.style.backgroundColor = "yellow"
})

secondSquare.addEventListener("click", () => {
    firstSquare.style.backgroundColor = "orange"
})
thirdSquare.addEventListener("click", () => {
    firstSquare.style.backgroundColor = "tourquoise"
});




const budget = 200;

function calculateTip() {
    if(budget > 100) {
    let tip = 10;
   console.log(`Your tip will be ${tip} ron`)
    } else if (budget < 100){
    const tip2 = budget *0.2;
    console.log(`Your tip will be ${tip2}`);
}
}
calculateTip();




// Restaurant ex



const restaurants = [
    {   name :" GoldenPork",
        menu : {
            pizza: 10,
            pasta : 20}
    },
    {   name :"italianDelice", 
        menu : {
            frenchFries : 5,
            desert : 4,
            gelato : 10
        }
    }
]

function cheapestRestaurant(places) {
    let cheapestMenu = places[0].menu.pizza;
    let cheapestRestaurantName = places[0].menu;
    for(place of places) {
        console.log(place);
        const prices = Object.values(place.menu);
        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < cheapestMenu) {
                cheapestMenu = prices[i];
                cheapestRestaurantName = place.name;
            }
        }
    }
    return cheapestRestaurantName;
}

console.log(cheapestRestaurant(restaurants));

//find biggest menu 
function biggestMenu(longList){
    let longMenu = longList.name
    let bigMenu = 0
    for(let item of longList){
        const theList = Object.keys(item.menu).length
        if(theList>bigMenu){
            bigMenu = theList
            longMenu =item.name
        }
    }
    return longMenu
}
console.log(biggestMenu(restaurants))


   
//Practice
const myArray = ["red", "green", "grey"];
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);
myArray.unshift("pink");
myArray.push("black");
for (let i = 0; i < myArray.length - 1; i++){
    console.log(myArray[i]);
}
myArray.sort();
console.log(myArray);