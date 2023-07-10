// //question 2
// const name1 = "syed zaryab ahmed";
// console.log(`hello ${name1},would you like to learn some python today?`);
// //question3
// const name2 = "syed zaryab ahmed"
// console.log(`hello ${name2.toLowerCase()},would you like to learn some python today?`);
// console.log(`hello ${name2.toUpperCase()},would you like to learn some python today?`);
// console.log(`Hello ${toTitleCase(name2)}, would you like to learn some Python today?`);

// function toTitleCase(str) {
//     return str.replace(/\w\s*/g, function (txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// //question 4
// console.log(`Prophet Muhammad said,"He who is not grateful to people is not grateful to God.`);
// //question 5
// const author = "Prophet Muhammad";
// const quote = "He who is not grateful to people is not grateful to God.";
// console.log(`${author} said,"${quote}`);
// //question 6
// const name3 = "\t      syed zaryab ahmed\n";

// console.log("Name with whitespace:");
// console.log(name3);

// const nameStripped = name3.trim();
// console.log("Name after stripping whitespace:");
// console.log(nameStripped);
// //question 7
// console.log(5 + 3);//addition
// console.log(10 - 2);  //subtraction
// console.log(4 * 2); //multiplication
// console.log(32 / 4);//division
// //question 8
// console.log(5 + 3);
// console.log(4 + 4);
// console.log(3 + 5);
// console.log(6 + 2);
// //question 9
// var myfavoriteNumber = "7 or 8";
// var printmessage = `My favorite number is ${myfavoriteNumber}!`;
// console.log(printmessage);
// //question 10




// //question 11
// let names = ["Danial", "ayan", "hasnain", "abdulrehman"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// //question 12
// let name4 = ["Danial", "ayan", "hasnain", "abdulrehman"];
// let greeting = "Hello, ";

// for (let i = 0; i < name4.length; i++) {
//   let message = greeting + names[i] + " Welcome!";
//   console.log(message);
// }
// //question 13
// const motorcycles = ["Honda civic", "Kawasaki Ninja H2R", "Suzuki 150"];

// for (const motorcycle of motorcycles) {
//   console.log(`I would like to own a ${motorcycle}.`);
// }
// //QUestion14
 

// let guestList = [`syed zaryab ahmed`, `ayan`,`shayan`];

// console.log("Invitation Messages:");
// guestList.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner at my place!`));
// //question 15
// const guestCantMakeIt= guestList.splice(1, 1)[0];
// console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.`);

// const newPerson = "azam";
// guestList.splice(1, 0, newPerson);


// console.log("\nUpdated Invitation Messages:");
// guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner at my place!`));

// console.log("\nGood news! I found a bigger dinner table!");
// // questuion 16
// guestList.unshift("ibad");
// guestList.splice(Math.floor(guestList.length / 2), 0, "abdul");
// guestList.push("danial");

// console.log("\nAdditional Invitation Messages:");
// guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner at my place!`));
// // question 17
// console.log("\nUnfortunately, due to a delay in the dinner table arrival, only two people can be invited for dinner.");

// while (guestList.length > 2) {
//   const removedGuest= guestList.pop();
//   console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }

// console.log("\nInvitation Messages:");
// guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner at my place!`));

// guestList.length = 0;
// console.log("\nFinal Guest List:");
// console.log(guestList);
// question 18
let placesToVisit = ['PARIs', 'TOKYO', 'ISTANBUL', 'USA', 'JAPAN'];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);

placesToVisit.reverse();

console.log("\nReversed Order:");
console.log(placesToVisit);

placesToVisit.reverse();

console.log("\nOriginal Order (Reversed):");
console.log(placesToVisit);

placesToVisit.sort();

console.log("\nAlphabetical Order:");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));

console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit);
// question 19
let guestList = [`syed zaryab ahmed`, `ayan`,`shayan`];

console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

const numGuests = guestList.length;
console.log(`Number of guests invited to dinner: ${numGuests}`);
// question 20
let countries= ['Canada', 'France', 'Australia', 'Japan', 'Brazil'];

console.log("List of Countries:");
console.log(countries);
let language= ['URDU', 'ENGLISH', 'HINDI', 'ARABI', 'SINDHI'];

console.log("List of language:");
console.log(language);
