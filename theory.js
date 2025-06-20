const citiesRussia = ['Moscow', 'Saint-Petersbourg', 'Novosibirsk', 'Kasan']
const citiesEurope = ['Berlin', 'Prague', 'Paris']


//spread - разворачивает массив с которым работаем
//syntax [...array]
// работа с массивами
const allCities = [...citiesRussia, ...citiesEurope]
console.log(allCities)

//работа с объектами
//sytnax [{...object}]
// что происходит
// с помощью {} мы создали новый объект и развернули все ключи
const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Novosibirsk: 5,
    Kazan: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Prague: 3,
    Paris: 2
}
console.log({...citiesRussiaWithPopulation})
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
//smart merge : если ключи повторяются возьмет в значание ключа из 2ого объекта

//Practice
const divs = document.querySelectorAll('div')
const divsToArray = [...divs]
console.log(divs, Array.isArray(divs))
console.log(divsToArray, Array.isArray(divsToArray))

//rest -
//syntax ...
function sum(a,b) {
    return a + b
}
const numbers = [1, 2, 3, 4, 5]
console.log(sum(...numbers))//spread
//что здесь черт возьми происхооооодит
//в массиве одиночные агрументы
//но функция возвряшает сумму только первых двух
// оставшиеся 3 агрумента игнгорируются функцией потому что мы их не видим

function sum(a,b, ...rest) { // собирает в себя все остальные параметры которые не использвала функция
    return a + b + rest.reduce((a,i) => a + i, 0)
}

const [a, b, ...other] = numbers // если хотим сказать что все осталные значения кроме a b будут в массиве others
//деструторизация массива
console.log(a, b)
console.log(other)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    county: 'Russia'
}
//деструкторизация объекта
const { name, age, ...address } = person
console.log(name, age)
console.log(address)
