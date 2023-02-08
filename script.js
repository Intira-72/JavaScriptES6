// For Loop, ForEach, ForOf

const data = [10, 20, 30, 40, 50]

// for(let i=0; i<data.length; i++){
//     if (data[i] > 30) break
//     console.log(data[i])
// }

// let total = 0
// data.forEach(i => {
//     total += i
// })
// console.log(total)


for (const e of data){
    if (e > 30) break
    console.log(e)
}
