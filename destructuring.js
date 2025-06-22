//1 Деструктуризация массивов:
// Простая деструктуризация массива
const numbers = [1, 2, 3];
const [one, two, three] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Пропуск элементов
const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3
//
// Деструктуризация с остатком (rest)
const [head, ...tail] = numbers;
//
console.log(head); // 1
console.log(tail); // [2, 3]

//2. Деструктуризация объектов:
// Простая деструктуризация объекта
const user = { name: 'Alice', age: 25, country: 'USA' };
const { name, age, country } = user;
//Это говорит:
//
// Создай переменные name, age и country,
// и присвой им значения из объекта user с такими же именами ключей.

console.log(name); // Alice
console.log(age); // 25
console.log(country); // USA

// Переименование переменных
const { name: userName, age: userAge } = user;
//💡 Это читается так:
//
// Из объекта user:
//
// возьми свойство name, и сохрани его значение в переменную userName
//
// возьми свойство age, и сохрани его значение в переменную userAge
console.log(userName); // Alice
console.log(userAge); // 25

// Деструктуризация с остатком (rest)
const { name: n, ...rest } = user;
// name - переименовывается в n и копирует в себя значение name

console.log(n); // Alice
console.log(rest); // { age: 25, country: 'USA' }

//3. Вложенная деструктуризация:
// Вложенная деструктуризация объекта
const person = {
    name: 'Bob',
    address: {
        city: 'New York',
        zip: '10001'
    }
};
// const { name, address: { city, zip } } = person;



const {name: User, address: userAddress } = person;
const {city: userCity, zip: userZip} = userAddress;
console.log(userAddress);
console.log(userCity); // Bob
console.log(userAddress); // New York
console.log(userZip); // 10001

// Вложенная деструктуризация массива
const nestedArray = [1, [2, 3], 4];
//[
//   1,          // индекс 0
//   [2, 3],     // индекс 1 → вложенный массив
//   4           // индекс 2
// ]

// const [a, [b, c], d] = nestedArray;
// 🔍 Вот что происходит:
//
//     a получает значение 1 → a = 1
//
//     [b, c] получает [2, 3], то есть:
//
//     b = 2
//
// c = 3
//
// d получает значение 4 → d = 4
//


// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4

//4. Деструктуризация в параметрах функции:
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const user1 = { name: 'Charlie', age: 30 };
printUser(user1); // Name: Charlie, Age: 30

// Деструктуризация массивов в параметрах функции
function sum([a, b, c]) {
    return a + b + c;
}

const numbers1 = [1, 2, 3];
console.log(sum(numbers1)); // 6