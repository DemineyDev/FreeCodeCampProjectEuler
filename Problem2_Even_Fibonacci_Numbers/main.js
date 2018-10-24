function fiboEvenSum(n) {
    var first = 1
    var second = 2
    var sum = 2
    var fiboSequence
    for (var i = 2; i <= n; i++) {
        fiboSequence = first + second
        first = second
        second = fiboSequence
        if (fiboSequence % 2 == 0) sum += fiboSequence;
    }

    
    

    return sum
}