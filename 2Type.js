/*let x = null;

if (typeof x === 'number'){
    console.log('X - число')
} else if (typeof x === 'string'){
    console.log('X - строка')
} else if (typeof x === 'boolean') {
    console.log('X - логический тип')
} else {
    console.log('Тип X не определён')
}*/

let x = false;

switch (typeof x) {
    case 'number':
        console.log('X - число');
        break;
    case 'string':
        console.log('X - строка');
        break;
    case 'boolean':
        console.log('X - логический тип');
        break;
    default:
        console.log('Тип X не определён');
}