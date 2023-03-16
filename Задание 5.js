let strX = prompt('Введите начальное значение:');
let strN = prompt('Введите конечное значение:');

let x = Number(strX);
let n = Number(strN);

const exponentiation = (x, n) => {
    let exp = 1;
    if (x === 0) {
        exp = 0
    } else if (n === 0) {
        exp = 1
    } else {
        for (let i = 0; i < n; i += 1) {
            exp = exp * x;
        }
    }
    
    console.log(`${x} в степени ${n} = ${exp}`);
    
}

if (isNaN(x)||isNaN(n)) {
    alert('Необходимо ввести числа!')   
} else {
    exponentiation(x, n);
}