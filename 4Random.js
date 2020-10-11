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