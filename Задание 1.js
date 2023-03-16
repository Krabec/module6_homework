function checkParity() {
    const arr = [1, 3, 17, 0, 1, null, 2, 19 ,68, 'string', undefined, 7]
    let counts0 = 0
    let counts1 = 0
    let counts2 = 0


    for (let i = 0; i < arr.length; i++) {
        
        let item = arr[i];

        if ((isNaN(item)) || (item === null)) {
            
        } else {
            if ((item % 2 === 0) && (item != 0) ) {
                counts2 += 1
            } else if ((item % 2 === 1) && (item != 0)) {
                counts1 += 1    
            } else if (item === 0){
                counts0 += 1
            }
        }
    }

    console.log(`Количество чётных элементов = ${counts2}, а количество нечетных = ${counts1}`)

    if (counts0 > 0) {
        console.log(`Количество нулей = ${counts0}`)
    }
};

checkParity();

