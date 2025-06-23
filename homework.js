//1
const numbers = [1, 5, 8, 10]

function getAverage(...nums) {
    const sum = nums.reduce((sum, num) => sum + num, 0);
    return(sum / nums.length);
}

const averageNumbers = getAverage(...numbers);
console.log(averageNumbers);

//2
const person = {
    name: "John",
    age: 32,
    country: 'Mongolia'
}

function personInfo ({name, age, country}) {
    return `${name}, ${age}, ${country}`
}

console.log(personInfo(person));

//3

const product = {
    id: 1000,
    name: 'Mobile Phone',
    brand: 'Samsung',
    specifications: {
        processor: 'Exynos',
        ram: '512 GB',
        rom: '16 GB'
},
    reviews: [
        {user: 'Jenny', rating: 5},
        {user: 'Anthony', rating: 5}
    ]
};

const {
    name: productName,
    specifications: {
        processor,
        ram: ramCapacity,
        rom: romCapacity
    },
    reviews: [
        {user: firstReviewer},
        {rating: secondRating}
    ]
} = product;

console.log(productName);
console.log(processor);
console.log(ramCapacity);
console.log(romCapacity);
console.log(secondRating)

//4
const animals = ['cat', 'dog', 'pig', 'horse']
const moreAnimals = ['owl', 'snake', ...animals, 'snail', 'spider'];
console.log(moreAnimals);

//5
const cat = {
    name: 'Felix',
    age: 2,
    isFluffy: true,
    cuteness: '10/10'
}

function felixTheCat ({name, ...rest}) {
    return rest
}

const aboutFelix = felixTheCat(cat);
console.log(aboutFelix);