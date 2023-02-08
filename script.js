// Array Filter

const data = [10, 20, 30, 40]

const result = data.filter(e => e > 25)
console.log(result)

const employees = [
    {name: "Kong", salary: 25000, department: "Programmer"},
    {name: "Jojo", salary: 30000, department: "Marketing"},
    {name: "Nut", salary: 12000, department: "Apprentice"},
    {name: "Bel", salary: 50000, department: "Marketing"},
    {name: "Joy", salary: 12000, department: "Apprentice"},
]

const result_emp = employees.filter(e => e.department === "Apprentice")
console.log(result_emp)