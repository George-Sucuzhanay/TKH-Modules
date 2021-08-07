// First Name - Last Name
// Below have a list of full names, we want to split these names into an array containing the first and
// last names as separate items. Then we want to push these names to two different arrays named
// first_name, last_name
// [“Westly Snipes”, “Nicholas Cage”, “Nasir Jones”, “Sean Carter”, “Sean Combs”, “Michael Jordan”,
// “Patrick Ewing”]


const mainArray = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"]

let ho = mainArray.join(' ').split(' ')
//console.log(ho)

//console.log(ho)
//console.log(ho.slice(0, 2));
let first_name =  ho[0] + ho[2] +ho[4] +ho[6] + ho[8] + ho[10] + ho[12]
console.log(first_name)

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]
