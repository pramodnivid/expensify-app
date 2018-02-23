// console.log("ALL is well")



// const Person = {
//     name:"Pramod",
//     age:"21",
//     location:{
//         city:"BLORE",
//         temp:25
//     }
// };

// const {name,age,location} = Person;
// const {city,temp:temperature} = location;
// console.log(`${name} is ${age} living in ${city} temperature is ${temperature} `)


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         publishName:"Penguin"
//     }
// };

// const{title,author} = book;
// const{publishName="self published"} = book.publisher;
// console.log(`${title} written by ${author} published by ${publishName}`);

const address = ['1299 juniper street',"blore","karnataka","19147"];

const[street,,state="india",year] = address; //destructuring , mapping it by position not by name unlike objects
console.log(state)


const items = ["coffee",'2','2.50','2.75'];
const[name,smallPrice,medPrice,LagePrice] = items
console.log(`small coffee price is ${smallPrice} `)