/*function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

x = getRandomInt(1, 100)

console.log (x)*/



function getRandom (min, max) {
    let newVar = Math.random() * (max - min) + min;
    return newVar;
}

x = getRandom (1, 100)
console.log(x)

// Решение не совсем соответствует заданию. Нужно было записать случайное число в диапазоне от 0 до 100, а у вас числа дробные и в диапазоне от 1 до 100. Ниже верное решение:


const random = Math.floor(Math.random() * 101);