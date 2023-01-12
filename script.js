// Rest Parameter

const sumation = (...numbers) => {
    let total = 0;
    for(let number of numbers){
        total += number
    };
    return total;
};

console.log(sumation(10, 20, 30, 40, 50, 60));