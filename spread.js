//1. Копирование массивов:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);
// [1, 2, 3]

//2. Объединение массивов:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);
// [1, 2, 3, 4, 5, 6]

//3. Копирование объектов
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject);
// { a: 1, b: 2 }

//4. Объединение объектов:
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);
// { a: 1, b: 2, c: 3, d: 4 }

//Передача аргументов в функции:

//📌 Пример:
//У нас есть массив numbers, который содержит три значения: 1, 2, 3.
const numbers = [1, 2, 3];
//📞 Функция:
//Это функция, которая ожидает три отдельных аргумента: a, b и c.

const sum = (a, b, c) => a + b + c;
//🤔 Как вызвать эту функцию с массивом?
//Обычным способом:
//sum(numbers); // ❌ Не сработает. Массив — это один аргумент.

//Но с spread:
//sum(...numbers); // ✅ Работает!
console.log(sum(...numbers));

const names = ['Anna', 'Felix', 'Jade']

// function greet(a, b, c) {
//     console.log(`Hello ${a}!`);
//     console.log(`Hello ${b}!`);
//     console.log(`Hello ${c}!`);
// }
//
// const greetings = greet(...names);

const greet = (a, b, c) => {
console.log(`Hello ${a}!`);
console.log(`Hello ${b}!`);
console.log(`Hello ${c}!`);
};
//не делаю консоль лог потому функция уже выводит
greet(...names);
