//1. Функции с произвольным числом аргументов:
//📦 Представь себе: ты собираешь яблоки 🍏
function collect(...apples) {
    console.log(apples);
    return apples;
}
//Когда ты вызываешь:
collect('green','red','yellow') // return ['green','red','yellow']
//Здесь ...яблоки означает:
//
// «Собери все переданные аргументы в один массив, с именем яблоки».

function sum(...numbers){
    return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(1,2,3,4));
//acc = 0 / 0 + 1 = 1
//acc = 1 / 1+2 = 3
//acc = 3 / 3 + 3 = 6
//acc = 6 / 6+ 4 = 10

console.log(sum(4, 5, 6, 7));
//acc = 0/ 4 + 0 = 4
//acc = 4 / 4 + 5 = 9
//acc = 9 / 9 + 6 = 15
//acc = 15 / 15 + 7 = 22

//🔄 Аналогия без чисел: собираем имена
function sayHiToAll (...names) {
    return names.reduce((greeting, name) => greeting + `Hello, ${name}! `, " ");
}
//почему кавычки
//🧠 Что такое reduce()?
// Метод .reduce() работает так:
// array.reduce((accumulator, currentValue) => ..., начальное_значение);
// accumulator (у нас greeting) — это то, что накапливается.
//
// currentValue (у нас name) — текущий элемент массива.
//
// "" — начальное значение аккумулятора (в данном случае — пустая строка).
console.log(sayHiToAll('Anna', 'Felix', 'Emma'));

//2. Деструктуризация массивов:
const [first, ...rest] = [1, 2, 3, 4];

console.log(first);
// 1

console.log(rest);
// [2, 3, 4]


// 3. Деструктуризация объектов:
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);
// 1

console.log(b);
// 2

console.log(rest);
// { c: 3, d: 4 }