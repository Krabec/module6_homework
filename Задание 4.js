let strA = prompt('Введите начальное значение:');
let strB = prompt('Введите конечное значение:');


let a = Number(strA)
let b = Number(strB)


function numberEnumeration() {
    let timer = setInterval(function() {
        if (a > b) {
        clearInterval(timer);
        } else {
        console.log(a++);
        }
    }, 1000);
}

if (isNaN(a)||isNaN(b)){
    alert('Необходимо ввести числа!');
} else if (a > b) {
    alert('К сожалению я не умею считать числа в обратном порядке :(');
} else {
    numberEnumeration();
}