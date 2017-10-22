// variable containing starting cash
const dollarAmount = .69

// create object that will eventually hold the coin types and their computed quantity
const piggyBank = {}

// convert the starting cash into a starting number of pennies (not final number)
let remainingAmount=dollarAmount*100

// divide the remainingAmount by 25 and drop the remainder to get the number of quarters
const quarters=Math.floor(remainingAmount/25)

// remove the value of the quarters in pennies from the remainingAmount
remainingAmount-=(quarters*25)

// update the piggyBank object with the property of quarters and the number
piggyBank.quarters=quarters

// divide the remainingAmount by 10 and drop the remainder to get the number of dimes
const dimes=Math.floor(remainingAmount/10)

// remove the value of the dimes in pennies from the remainingAmount
remainingAmount-=(dimes*10)

// update the piggyBank object with the property of dimes and the number
piggyBank.dimes=dimes

// divide the remainingAmount by 5 and drop the remainder to get the number of nickels
const nickels=Math.floor(remainingAmount/5)

// remove the value of the nickels in pennies from the remainingAmount
remainingAmount-=(nickels*5)

// update the piggyBank object with the property of nickels and the number
piggyBank.nickels=nickels

// what is left in the remainingAmount is the number of pennies
const pennies=remainingAmount

// update the piggyBank object with the property of pennies and the number
piggyBank.pennies=pennies

// display in the console the PiggyBank object
console.log(piggyBank)
