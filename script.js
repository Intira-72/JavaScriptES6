// Block Scope (let / constant)

let x = 100;
let y = 50;

if(x===10){
    let y = 500;    
    console.log("y =", y);
};

console.log("y =", y);