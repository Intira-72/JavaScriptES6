// Default Parameter

const getDataCustomer = (customerName, customerAddress="None") => {
    const addr = `Customer Name: ${customerName}
Address: ${customerAddress}`

    return addr
};

const kong = getDataCustomer("Kong", "Bangkok")
const jojo = getDataCustomer("Jojo")

console.log(kong)
console.log(jojo)