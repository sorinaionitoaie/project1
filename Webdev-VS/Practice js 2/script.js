// test
console.log("Hello")

// 3. Store information related to your favorite flowers. Select at least 5 flowers (if you hate flowers ... then put weeds aka "buruieni")
const flowerDetails = [
    "Rose - Red",
    "Sunflower - Yellow",
    "Lily - White",
    "Tulip - Various Colors",
    "Orchid - Various Colors"
];
// 4. Print in the console of the data structure with the names of all the flowers
  
  flowerDetails.forEach(function(detail) {
    console.log(detail);
  });

// 5.Print the first and the last element of the array 

  // first element
console.log("First Flower:", flowerDetails[0]);

// second element
console.log("Last Flower:", flowerDetails[flowerDetails.length - 1]);


// 6.Add 2 new flowers to the list
flowerDetails.push("Roses - Red");
flowerDetails.push("Tulips - Various Colors");


console.log("Updated Flower List:");
flowerDetails.forEach(function(detail) {
  console.log(detail);
});

// 7. Add a new flower at the beginning of the list

flowerDetails.unshift("Daffodil - Yellow");

console.log("Updated Flower List:");
flowerDetails.forEach(function(detail) {
  console.log(detail);
});
 

// 8.Delete the last flower in the list
flowerDetails.pop();

// Print the updated array
console.log("Updated Flower List:");
flowerDetails.forEach(function(detail) {
  console.log(detail);
});