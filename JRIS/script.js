// let name = "JRIS6217"
// console.log(name) 

let food = parseInt(prompt("这餐食物多少钱"))
let tipPercentage = parseInt(prompt("小费比例多少"))/100
let TipAmount = food * tipPercentage
let total = food + tipPercentage
console.log("小费"+ TipAmount)
console.log("总金额"+ total)
