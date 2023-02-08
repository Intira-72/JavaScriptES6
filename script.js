// indexOf, find, findIndex

const colors = ["Red", "Green", "Blue", "Purple", "White"]

console.log(`Red is index ${colors.indexOf("Red")}`)
console.log(`Blue is index ${colors.indexOf("Blue")}`)

console.log(`findIndex Green in colors : ${colors.findIndex(e => e==="Green")}`)

console.log(colors.find(e => e==="Green"))
console.log(colors.find(e => e==="Black"))

