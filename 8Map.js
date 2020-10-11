let myMap = new Map();

myMap.set('key', 'pop');

myMap.set(1, 'pop2');

myMap.set(true, 123);

myMap.set(3, false)


let result

myMap.forEach((value, key, map)=> {
    result = `Ключ - ${key}, Значение - ${value}`
    console.log(result)
})



