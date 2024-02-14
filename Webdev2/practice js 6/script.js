
 // const car = {
//     brand: 'Mercedes',
//     value: 50000,
//     speed: 300,
//     isEco: true,
//     expensivePieces: ["engine", "wheels", "oil"],
//     break: function (){
//         console.log("This car is money pit")
//     }
// };
// console.log(car.speed + " top speed");
// car.speed = 250
// console.log(car.speed + " top speed");
// car.break()


// const newCar = {
//     brand: 'Porsche',
//     value: 70000,
//     speed: 350,
//     isEco: true,
//     expensivePieces: ["window", "hood"],
//     break: function (){
//         console.log("This car is money pit")
//     }
// };
// newCar.break()


// const superCar = {
//     brand: 'Ferrari',
//     value: 120000,
//     speed: 500,
//     isEco: true,
//     expensivePieces: ["backseat", "exhaust"],
//     break: function (){
//         console.log("This car is money pit")
//     }
// };
// superCar.break()

// class Car{
//     brand;
//     value;
//     speed;
//     isEco = true;
//     expensivePieces;

//     constructor (brand, value, speed, expensivePieces){
//         this.brand = brand
//         this.value = value
//         this.speed = speed
//         this.expensivePieces = expensivePieces
//     }
//     break(){
//         console.log("New model")
//     }
// }

//  const expensiveCar1 = new Car('Audi', 80000, 250, ["exhaust"])
//  const expensiveCar2 = new Car('Opel', 27000, 175, ["door"])

//  expensiveCar2.break()
// console.log(expensiveCar1)

//  function createCars(){
//     const expensiveCar1 = new Car('Audi', 80000, 250, ["exhaust"])
//     const expensiveCar2 = new Car('Opel', 27000, 175, ["door"])
   
//     expensiveCar2.break()
   
//  }

// createCars()

// Exercices




class Trip {
    constructor(name, cost, country, isBookable, isInternational, essentialsToPack, schedule) {
      this.name = name;
      this.cost = cost;
      this.country = country;
      this.isBookable = isBookable;
      this.isInternational = isInternational;
      this.essentialsToPack = essentialsToPack;
      this.schedule = schedule;
    }
  
    
    displayTripInfo() {
      console.log(`Trip Name: ${this.name}`);
      console.log(`Cost: ${this.cost}`);
      console.log(`Country: ${this.country}`);
      console.log(`Bookable: ${this.isBookable ? 'Yes' : 'No'}`);
      console.log(`International: ${this.isInternational ? 'Yes' : 'No'}`);
      console.log(`Essentials to Pack: ${this.essentialsToPack.join(', ')}`);
      console.log(`Schedule: `);
      this.schedule.forEach((item, index) => {
        console.log(`Day ${index + 1}: ${item}`);
      });
    }
  }
  
  
  const trip = new Trip(
    "Beach Holiday", 
    1500, 
    "Spain", 
    true, 
    true, 
    ["Sunglasses", "Swimwear", "Sunscreen"], 
    ["Arrival and check-in", "Beach day", "City tour", "Departure"]
  );
  
 
  trip.displayTripInfo();