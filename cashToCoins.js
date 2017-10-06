const dollarAmount = .69
const piggyBank = {}

// Your magic code here
let remainingAmount=dollarAmount*100
const quarters=Math.floor(remainingAmount/25)
remainingAmount-=quarters
const dimes=Math.floor(remainingAmount/10)
remainingAmount-=dimes
const nickels=Math.floor(remainingAmount/5)
remainingAmount-=nickels
const pennies=remainingAmount

piggyBank={"quarters":quarters,"dimes":dimes,"nickels":nickels,"pennies":pennies}

console.log(piggyBank)
