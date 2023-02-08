// push, pop, shift, unshift

const data = [10, 20, 30]
console.log("Before:", data)

data.push(...[500, 1000, 2000])
console.log(".push(...[500, 1000, 2000]) :", data)

data.pop()
console.log(".pop() :", data)

data.shift()
console.log(".shift() :", data)

data.unshift(1200)
console.log(".unshift() :", data)