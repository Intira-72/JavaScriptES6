// Array Map

const numbers = [10, 20, 30, 40]
console.log(`numbers : ${numbers}`)

const new_numbers = numbers.map(e => e * 2)
console.log(`new_numbers : ${new_numbers}`)

const data = ["Rainy", "Sunny", "Windy", "Sunny", "Windy", "Rainy"]
const result = data.map((e, i) => {
    return `Day ${i+1} is ${e}`
})

result.forEach(e => console.log(e))

const obj = [
    {day: "01/06/2023", weather: "Sunny", temp: 32},
    {day: "02/06/2023", weather: "Rainy", temp: 28},
    {day: "03/06/2023", weather: "Cold", temp: 24}
]

const weather = obj.map(e => e.weather)
console.log(weather)