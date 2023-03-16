function getPrime(number) {
    let count = 0;
    let str = 0;
    if ((number <= 1000) && (number != 0)) {
        for (let i = 1; i <= number; i++){
            if (count < 3){
                if (number % i === 0) {
                    count += 1;
                }
            } else {
                break;
            }
        }
        if (count === 2){
            str = "ЯВЛЯЕТСЯ";
        } else {
            str = "НЕ ЯВЛЯЕТСЯ";
        }
    } else if (number === 0){
        str = "НЕ ЯВЛЯЕТСЯ";
    } else {
        str = "Данные не верны!";
    }

    return str;
}

let prime = getPrime(501);

if (prime != "Данные не верны") {
    console.log(`Введенное число ${prime} простым!`)
} else {
    console.log(prime)
}
