// class Animal{
//     species;
//     weight;
//     isHerbivorous;
//     isHeterotroph = true;
//     constructor(name, weight, isHerbivorous){
//         this.species = name;
//         this.weight = weight;
//         this.isHerbivorous = isHerbivorous;
//     }
//     goToSleep(){
//         console.log(`This ${this.species} sleeps a lot`)
//     }
// }


// const firstAnimal = new Animal('Dog', '50', false)
// console.log(firstAnimal)

// const secondAnimal = new Animal('Cat', '10', false)
// console.log(secondAnimal)

// secondAnimal.goToSleep()
// firstAnimal.goToSleep()



// class Bird extends Animal {
//     wingSpan;
//     numberOfEggs;
//     constructor(name,weight,isHerbiore, wingsSpan, numberOfEggs) {
//         super(name,weight,isHerbiore);
//         this.wingsSpan = wingsSpan
//         this.numberOfEggs = numberOfEggs;
//     }
//     chirp(){
//         console.log('chirp chirp');
//     }
// }

// const parrot = new Bird('Parrot', 5 , true, 5, 3);
// const owl = new Bird('Owl', 10, true, 10, 2);

// console.log(parrot);
// console.log(owl);

// parrot.goToSleep()
// owl.goToSleep()
// owl.chirp()


// console.log(owl.isHerbivorous)



// 1. Create a new class Plant. This class should have species, habitat, usage, is or not aquatic, is or not extinct as properties


class Plant {
    constructor(species, habitat, usage, is_aquatic, is_extinct, weight) {
        this.species = species;
        this.habitat = habitat;
        this.usage = usage;
        this.is_aquatic = is_aquatic;
        this.is_extinct = is_extinct;
        this.makesPhotosynthesis = true; 
        this.weight = weight; 
    }
    generateOxygen() {
    
        const oxygenProduced = 0.4 * this.weight; 
        return `${oxygenProduced} mg/mL oxygen produced by a ${this.weight} kg plant.`;
    }
}


const examplePlant = new Plant('Fern', 'Forest', 'Medicinal', false, false, 1.2);
console.log(examplePlant);


// 4. Add a new method to all plants ... you can modify the initial class template; this method .... generate oxygen ... should input a value taking into account the weight of the plant .... don't waste time searching for weight/nutrients absorbition conversion to oxygen formulas ... this is not biochemistry and physiology;




const examplePlant2 = new Plant('Fern', 'Forest', 'Medicinal', false, false, 100);
console.log(examplePlant.generateOxygen());

//5. instantiate plant 3 times.

const plant1 = new Plant('Oak', 'Forest', 'Wood', false, false, 500);
console.log(plant1);
console.log(plant1.generateOxygen());


const plant2 = new Plant('Water Lily', 'Pond', 'Aesthetic', true, false, 0.5);
console.log(plant2);
console.log(plant2.generateOxygen());


const plant3 = new Plant('Cactus', 'Desert', 'Medicinal', false, false, 2);
console.log(plant3);
console.log(plant3.generateOxygen());



// 6. Calculate how much oxygen can the aquatic plants output




// 7 What is the weight of the all the three plants? Use reduce method
const weights = [500, 0.5, 2];


const totalWeight = weights.reduce((accumulator, current) => accumulator + current, 0);

console.log(`Total weight of all three plants: ${totalWeight} kg`);


//8. Create a specialized plant called AquaticPlant which will have a new method called floatingAround. This should input :"As a [water-lily] I l like to float around"

class AquaticPlant extends Plant {
    constructor(species, habitat, usage, is_aquatic, is_extinct, weight) {
        
        super(species, habitat, usage, is_aquatic, is_extinct, weight);
    }

    
    floatingAround() {
        return `As a ${this.species}, I like to float around.`;
    }
}

//8.  Example of creating a new AquaticPlant instance
const aquaticPlant = new AquaticPlant('Water Lily', 'Pond', 'Aesthetic', true, false, 0.5);
console.log(aquaticPlant.floatingAround());


// 9.Create a new class which extends AquaticPlants which hold the object that are aquatic plants and live only in the sea. Add saltComposition as new property and make the floatingAround print something different ... include de word sea or ocean in it;

class MarinePlant extends AquaticPlant {
    constructor(species, habitat, usage, is_aquatic, is_extinct, weight, saltComposition) {
        
        super(species, habitat, usage, is_aquatic, is_extinct, weight);
        this.saltComposition = saltComposition; 
    }

    
    floatingAround() {
        return `As a ${this.species}, I thrive in the ocean, floating around with a salt composition of ${this.saltComposition}.`;
    }
}


const marinePlant = new MarinePlant('Seaweed', 'Ocean', 'Nutrition', true, false, 1.5, 'High');
console.log(marinePlant.floatingAround());