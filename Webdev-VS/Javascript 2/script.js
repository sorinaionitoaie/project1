// const hasMoney = true;
// const hasFreeTime = true;

// if (hasMoney == true && hasFreeTime == true){
//     console.log("You can play FIFA");
// }else if(hasMoney ==false && hasFreeTime ==true){
//     console.log("Get some money!");
// }

// const favPlayer = "Messi"
// const price = 300
// const myBudget = 400
// const guestStar = "Messi"
// if (myBudget > price && guestStar == "Messi"){
//     console.log("I'm a happy man!");
// }

// const priceShaorma = 50;
// if (myBudget - priceShaorma > price ){
//    console.log("I have enough money")
// }else {
//     console.log("No more money");
// }


// // ======================================
// const favSport = "Soccer"
// const leastFavSport = "Tennis"
// const thirdFavSport = "Fitness"

// const userPick = prompt("Pick your favorite sport: ");

// if(userPick === favSport || userPick === leastFavSport || userPick === thirdFavSport) {
//     console.log("Yes, i practice this sport aswell.")
// } else {
//     console.log("Nice,that's something new.")
// }

// let favoriteSports = ["Soccer", "Tennis", "Fitness"]

// if(favoriteSports.includes(userPick, 1)){
//     console.log("Yay, we like the same sport")
// }

// // 
// const pets = ['dog', 'cat', 'fish', 'bird'];
// console.log(pets)
// console.log(pets[2]);
// console.log(pets.lenght);

// pets.push('horse');  //adds element at the end of the array
// console.log(pets);

// pets.pop();
// console.log(pets); // remove last element

// pets.shift();
// console.log(pets);

// pets.unshift('dog'); // adds element at the beggining of the array
// console.log(pets);



// // ===================================
// const movie = ['Saving Private Ryan', 'Pearl Harbor']
// const newMovie = prompt('Please type a new movie')
// if(movie.includes(newMovie)){
//     console.log('This movie is already in the list')
// } else{
//     console.log('This movie is not on the list')
//     movie.push(newMovie);
//     console.log(movie);
// }



// console.log(movie[0]);
// console.log(movie[1]);
// console.log(movie[2]);

// for (let i = 0; i < movie.lenght; i++) {
//    console.log(movie[i]); 
// }




// const favTrips = ['Italy', 'Czech', 'Croatia'];
// console.log(favTrips[0]);
// console.log(favTrips[1]);
// console.log(favTrips[2]);

// for (let i = 0; i < favTrips.lenght; i++) {
//     console.log(favTrips[i]);
// }


// for (let i = 1; i <= 20; i ++) {
//     console.log(`Exercise Nr. ${i}`)
// }


// // -----------------------------------------
//  const savePassword = "Gigel"
//  let newPassword = prompt("Correct password:");
//  let i = 0
//  if (savePassword == newPassword){
//      console.log("Ok");
//  }else{
//      while (savePassword != newPassword){
//          newPassword = prompt ("Password: ");
//          i++;
//      }
//  }
//  console.log(`Wrong : ${i}`)






// //  =======================
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// let chooseNr = parseInt(prompt("Choose a number between 1-14"))
// console.log(typeof chooseNr)
// const blackJack = 21;
// let sumCards = chooseNr;
// let nrCards = 1

// while (sumCards < blackJack){
//     chooseNr = parseInt(prompt("Choose a number between 1-14"))
//     sumCards = sumCards + chooseNr;
//     nrCards = nrCards + 1
// }
// console.log(nrCards);




// const greenhousePlants = [];

// while (true) {
//   const plantName = prompt("Introduce a new plant to your greenhouse (type 'weed' or 'marijuana' to stop):");

//   if (plantName && (plantName.toLowerCase() === 'weed' || plantName.toLowerCase() === 'marijuana')) {
//     alert("Busted... this is illegal... the cops are coming! Have fun in jail!");
//     break;
//   } else if (plantName) {
//     greenhousePlants.push(plantName);
//     alert(`Added ${plantName} to your collection of plants.`);
//   } else {
//     alert("Invalid input. Please try again.");
//   }
// }

// console.log("Greenhouse Plants Collection:", greenhousePlants);


    
// 3 objects (each for one employee) each object should have: firstname, last name, position, salary
// const employee1 = {
//     firstName: 'Bob',
//     lastName: 'Elliot',
//     position: 'Accountant',
//     salary: 5000
// }

// const employee2 = {
//     firstName: 'Ana',
//     lastName: 'Mary',
//     position: 'Manager',
//     salary: 7000
// }

// const employee3 = {
//     firstName: 'James',
//     lastName: 'Potter',
//     position: 'Director',
//     salary: 10000
// }

// const result = employee2.salary;
// console.log(result);

// employee2.position = "senior"
// console.log(employee2.position)

// employee1.hasBenefits = false;
// employee2.hasBenefits = false;
// employee3.hasBenefits = true;
// console.log(employee1)

// const employeeSecondNames = [];
// employeeSecondNames.push(employee1.lastName)
// employeeSecondNames.push(employee2.lastName)
// employeeSecondNames.push(employee3.lastName)

// let longest = employeeSecondNames[0];

// for(let i = 1; i<employeeSecondNames.length; i++){
//     if(employeeSecondNames[i].length > longest.length){
//         longest = employeeSecondNames[i]
//     }
// }


// 1. Calculati cati bani trebuie sa aloce compania lunar pentru cele 3 salarii
// const totalSalary = employee1.salary + employee2.salary + employee3.salary;
// console.log('Total monthly salary :', totalSalary);

// // 2. Media salariilor
// const numberofEmployees = 3
// const averageSalary = totalSalary / numberofEmployees;
// console.log('Average salary:', averageSalary);

// 3. In luna ianuarie se acorda prime. Fiecare angajat primeste 10%, daca esti Director sau Manager primesti 15% plus o vacanta in Insulele Canare. Personale care au primit vacanta ar trebui sa aiba o noua proprietate likeABoss .... cu boolean value.
// const employees = [employee1, employee2, employee3];
// for(let i = 0; i < employees.length; i++) {
//     employees[i].salary = employees[i].salary * 1.1;
// } 
// if (employees[i].position === 'Manager' || employees[i].position === 'Director') {
//     employees[i].salary = employees[i].salary * 1.05;
//     employees[i].likeABoss = true;
//     employees[i].holidayDestination = 'Canary Islands';
// }

// for (let i = 0; i < employees.length; i++) {
//     console.log(`Employee ${i + 1}:`, employees[i]);
// }




// 4. adaugati sufixul "isor" la fiecare prenume doar pentru obiectele care nu sunt Director






// 5. Adaugati inca 2 angajati. Salariul lor va fi cuprins intre 4000 si 8000. Folositi o modalitate care sa calculeze random salariul lor.





//1. Find out the value on single dice
//2. Put the value in dice in a variable
//3. Find out  the value of the second dice
//4. put the value in a var
//5. use while loop to repeat the steps and to count their numbers of steps
// 5.1 find out the condition
// 5.2 Reroll both dices
// 5.3 increase the number of steps 
//6. Use variable to store the count of steps

// let count = 0;
// let dice1 = Math.round(Math.random() * (6-1) + 1)
// console.log(dice1)
// let dice2 = Math.round(Math.random() * (6-1) + 1)
// console.log(dice2)

// while(dice1 != 6 || dice2 !=6){
//     console.log('inWhile')
//     dice1 = Math.round(Math.random() * (6 - 1) +1);
//     console.log(`dice nr 1 value is ${dice1}`)
//     dice2 = Math.round(Math.random() * (6 - 1) +1);
//     console.log(`dice nr 2 value is ${dice2}`)
//     count +=1
// }


// const favPlayers = ["Messi", "Ronaldo", "Kaka", "Pirlo"]
// for(let i = 0; i < favPlayers.length; i++){
//     console.log(favPlayers[i])
//     if(favPLayers [i][0] == "P" || favPlayers[i][0] == 'R')
//     console.log(favPlayers[i]);
// }



//
// const soccerPlayer = {
//     firstName: 'Ronaldo',
//     lastName: 'Ronaldinho',
// }
// console.log(soccerPlayer.firstName)

// const soccerPlayerv = ['Ronaldo', 'Ronaldinho'] 
// console.log(soccerPlayerv[1]);






//Game development: Quizz
//Create a game to play and display the results in the console. Ask the user 3 questions and offer 4 options to pick. Score the correct answer with 3 points and the inccorect answers with -1 points. In the end show the final score; use console to display, prompt to to gather input from the user; also .... you can pick any other element that might help you

// const questions = [
//     {
//       question: "When WW2 started?",
//       options: ["1940", "1939", "1943", "1936"],
//       correctAnswer: "1939"
//     },
//     {
//       question: "Which team won CHAMPIONS LEAGUE IN 2023?",
//       options: ["Manchester City", "Liverpool", "Porto", "FCSB"],
//       correctAnswer: "Manchester City"
//     },
//     {
//       question: "How many countries does Europe have?",
//       options: ["39", "48", "50", "45"],
//       correctAnswer: "50"
//     }
//   ];
  
//   let score = 0;
  
//   for (let i = 0; i < questions.length; i++) {
//     const questionObj = questions[i];
  
//     const userAnswer = prompt(`${questionObj.question}\n${questionObj.options.map((option, index) => `${index + 1}. ${option}`).join('\n')}\nEnter the number of your answer (1-4):`);
  
//     if (userAnswer === null || isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4) {
//       alert("Invalid input. Skipping this question.");
//       continue;
//     }
  
//     const userIndex = userAnswer - 1;
//     const userChoice = questionObj.options[userIndex];
  
//     if (userChoice === questionObj.correctAnswer) {
//       alert("Correct!");
//       score += 3;
//     } else {
//       alert(`Incorrect! The correct answer is ${questionObj.correctAnswer}`);
//       score -= 1;
//     }
//   }
  
//   alert(`Your final score is: ${score}`);




// //FUNCTIONS

// function showNameDetails(name){
//     console.log(`Your name is ${name}`)
//     console.log(`First letter is ${name[0]}`) 
//     //console.log(First letter is ${name.charAt(0)})
//     console.log(`Last letter of the name is ${name[name.length-1]}`)
//     console.log(`There are ${name.length} characters`)
// }

// showNameDetails("Ioana");
// showNameDetails("Adi");

// console.log("Ioana".charAt(0))




// function productDetails(article,price,discount){
//     console.log(`${article} costs ${price} and with the discount ${discount} costs: ${price-price*discount/100}`);

// }

// productDetails('avocado', 1, 20);
// productDetails('cheese', 5, 30);

