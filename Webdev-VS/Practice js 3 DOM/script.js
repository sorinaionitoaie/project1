// // 1.Realizati o structura de date care sa stocheze 5 retete traditionale. Ar trebuie sa stocati numele retetelor, durata de pregatire, ingredientele fiecarei reteta, costul per ingredient si costul total pe reteta
// let retete = [
//     {
//         nume: "Sarmale",
//         durataPregatire: "3 ore",
//         ingrediente: [
//             { nume: "varza", cantitate: "1 kg", cost: 5 },
//             { nume: "carne tocata", cantitate: "500 g", cost: 20 },
//             { nume: "orez", cantitate: "200 g", cost: 2 },
            
//         ],
//         costTotal: 27 
//     },
//     {
//         nume: "Mamaliga",
//         durataPregatire: "45 minute",
//         ingrediente: [
//             { nume: "malai", cantitate: "300 g", cost: 3 },
//             { nume: "apa", cantitate: "1 L", cost: 0 },
//             { nume: "sare", cantitate: "10 g", cost: 0.5 },
           
//         ],
//         costTotal: 3.5
//     },
    
// ];
// // 2.Printati prima reteta in consola
// console.log(retete[0]); 

// // 3.Care este ultimul ingredient din ultima reteta?
// let ultimaReteta = retete[retete.length - 1];
// let ultimulIngredient = ultimaReteta.ingrediente[ultimaReteta.ingrediente.length - 1];

// console.log(ultimulIngredient);

// // 4.Adaugati inca o reteta la finalul structurii alese
// retete.push({
//     nume: "Ciorba de burta",
//     durataPregatire: "4 ore",
//     ingrediente: [
//         { nume: "burta prefiarta", cantitate: "1 kg", cost: 30 },
//         { nume: "legume pentru supa", cantitate: "500 g", cost: 5 },
//         { nume: "smantana", cantitate: "200 g", cost: 4 },
//         { nume: "otet", cantitate: "50 ml", cost: 1 },
        
//     ],
//     costTotal: 40 
// });


// console.log(retete[retete.length - 1]); 



// //5. Creati o functie care primeste 2 retete ca si argumente si va returna care din reteta este mai ieftina de realizat
// function comparaRetete(reteta1, reteta2) {
//     if (reteta1.costTotal < reteta2.costTotal) {
//         return reteta1;
//     } else if (reteta2.costTotal < reteta1.costTotal) {
//         return reteta2;
//     } else {
//         return "Retetele au acelasi cost";
//     }
// }


// let retetaIeftina = comparaRetete(retete[0], retete[1]);
// console.log("Reteta mai ieftina este:", retetaIeftina.nume);



//DOM Methods

//QUERY METHODS

// query by id
document.getElementById("myName");
var query = document.getElementById("myName");
console.log(query);

//query by class
document.getElementsByClassName("color")
var queryclass = document.getElementsByClassName("color")
console.log(queryclass);


// query by tag
document.getElementsByTagName("h3")
var query3 = document.getElementsByTagName("h3")
console.log(query3);



//MUTATING METHODS

// .innerHTML
let content1 = query
console.log(content1);
content1.innerHTML = 'Sorin';


document.getElementById("myName").getAttribute("title");
const query5 = document.getElementById("myName").getAttribute("title");
console.log(query5);


//change title---
document.getElementById("myName").setAttribute("title", "nice lesson");


const btn = document.getElementById("btn");
console.log(btn);
let countClicks = 0;
btn.addEventListener('click', () =>{
    countClicks++
    alert(`I was clicked ${countClicks}`);
    btn.innerHTML = `You clicked ${countClicks}`;
})


// random number
const randomBtn = document.getElementsByClassName("random")[0];
console.log(randomBtn);
randomBtn.addEventListener("click", () =>{
    console.log(Math.floor(Math.random () * 15));
});






