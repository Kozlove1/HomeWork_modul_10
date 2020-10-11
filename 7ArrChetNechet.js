
const numb =[1, 2, 3, 4, 5, 6, 7, 8, 9];

let Chet = 0;
let neChet = 0;

    for (let i = 0; i < numb.length; i++) {
        if (numb[i] % 2 === 0) {
            Chet++;
        } else {
            neChet++;
        }
    }
    console.log("Chet : " + Chet);
    console.log("neChet : " + neChet);


    /*Код немного подсмотрел, но только не много, дальше все сам, но вот не могу понять как добавить проверку на null и остальное.
    Когда появляеться ветка
    else if (numb[i] === 0) {
            console.log ('0');
        }.
        Так я думал вытаскивать отдельно 0.
       В итоге 0 просто добавляетсья в графу четные, а console.log ни выводит его

         В дальнейшем разберусь.
     */
