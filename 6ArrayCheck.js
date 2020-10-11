const arr = [1, 2, 3, 4, 5, 6, 5, 1, 4, 7, 3, 6, false, false, "gbcz", "gbcz", 1];

let arrElem = arr [0];

arr.forEach(function(item, index, array) {
    if ( typeof item === typeof arrElem) {
        console.log(true)
    } else {
        console.log (false)
    }
})

/* ЕСЛИ УБРАТЬ TYPEOFF МАССИВ БУДЕТ ПРОВЕРЕН НА ОДИНАКОВЫЕ ЭЛЕМЕНТЫБ А НЕ НА ИХ ТИПЫ*/
/*Как объединить это в один код, не понял, но все в переди*/
