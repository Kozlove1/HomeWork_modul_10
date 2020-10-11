let numb = +prompt('Введите число');

if (isNaN (numb) || numb === 0){
    console.log('Упссс')
}else if (numb & 1) {
    console.log("Нечет")
} else {
    console.log("Чет")
}

