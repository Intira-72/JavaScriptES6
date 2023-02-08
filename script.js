// splice, slice

const data = [10, 20, 30, 40, 50]
console.log("Before :", data)

data.splice(1, 3, ...[80, 90, 100])
console.log(".splice(1, 3) :", data)

const new_data = data.slice(1, 3)
console.log(".slice(1, 3)", new_data)