// CodePen Link: https://codepen.io/George-Sucuzhanay/pen/yLbRdQz
const weeklyIncome = parseInt(prompt("weekly-income:"))
const foodCost = parseInt(prompt("food-cost:"))
const housingCost = parseInt(prompt("housing-cost:"))
const transportationCost = parseInt(prompt("transportation-cost:"))
const otherCost = parseInt(prompt("other-cost:"))
const savings = parseInt(prompt("how much do you want to save in a year:"))

let savingsGoals = (savings/52)

let totalWeekly = (weeklyIncome) - (foodCost + housingCost + transportationCost + otherCost)

if (totalWeekly > savingsGoals || totalWeekly < savingsGoals) {
    console.log("You are on track!")
} else if (savingsGoals = totalWeekly) {
    stepstoTake = savingsGoals - totalWeekly
    console.log("You need to save", stepstoTake, "more a week")
}




// if the amount left over is greater than or less than the amount they need to save a week
// If it is, we tell them they are on track;
// if not, we tell them they need to save X amount more a week, X is the difference between what they do save and what they
// need to save. 