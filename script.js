// Destructuring

// Array
const colors = ["green", "red", "yellow"]
const [g, r, y] = colors
const[,,ye] = colors


//Object
const product = {
    productName: "Computer",
    price: 30000,
    stock: 10
}

const {productName, price, stock} = product

console.log(productName)