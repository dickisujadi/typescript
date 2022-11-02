type Employee = {
    id : number,
    name : string
}

function registEmployee(id_ : number, name_ : string) : Employee {
    let obj : Employee = {
        id: id_,
        name: name_
    }

    return obj
}

let employee = registEmployee(1, 'Dicki Sujadi')
console.log(employee)
