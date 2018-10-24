

function multiplesOf3and5 (number) {
    var numberArray = []
    var sumOfMultiples = 0
    
    for (var i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            numberArray.push(i)
        }
    }

    console.log(numberArray)    

    for (var i = 0; i < numberArray.length; i++) {
        sumOfMultiples += numberArray[i]
        
        
    }
    return sumOfMultiples
    
}

multiplesOf3and5(30)



