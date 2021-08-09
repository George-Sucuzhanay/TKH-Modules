// Task:
// You are given a variable grade. Your task is to print:
// - A+ if marks is greater than 90 .
// - A if marks is greater than 88 and less than or equal to 90 .
// - B+ if marks is greater 84 than and less than or equal to 88.
// - C+ if marks is greater than 76 and less than or equal to 84.
// - C if marks is greater than 70 and less than or equal to 76.
// - D+ if marks is greater than 67and less than or equal to 70.
// - D if marks is greater than 64 and less than or equal to 67.
// - F if marks is less than or equal to 64.


// CodePen Link: https://codepen.io/George-Sucuzhanay/pen/OJmBeqN
let marks = parseInt(prompt("What is the mark?"))

if (marks > 90) {
    console.log("A+")
} else if (88 < marks && marks <= 90) {
    console.log("A")
} else if (84 < marks && marks <= 88) {
    console.log("B+")
} else if (76 < marks && marks <=84) {
    console.log("C+")
} else if (70 < marks && marks <= 76) {
    console.log("C")
} else if (67 < marks && marks <= 70) {
    console.log("D+")
} else if (64 < marks && marks <= 67) {
    console.log("D")
} else {
    console.log("F")
}