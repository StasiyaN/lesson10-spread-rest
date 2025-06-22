// const age = 16
// const height = 160
// const grade = 10

const [time, height, grade] = [16, 160, 10]
console.log(time)
console.log(height)
console.log(grade)

//повышает читабельность массива тпа добавляет ключи

//objects
const user = {
    name: 'Nicolas',
    age: 30,
    city: 'Paris'
}
//without
// const name = user.name
// console.log(name)
// const age = user.age
// console.log(age)
// const city = user.city
// console.log(city)
//with
const {name, age, city} = user
console.log(name)
console.log(age)
console.log(city)
