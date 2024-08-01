function fibonacciGenerator(n) {
    let fibonacciNumbersArray = [0, 1];

    for (var i = 2; i < n; i++) {
        let a = fibonacciNumbersArray[i - 1];
        let b = fibonacciNumbersArray[i - 2];
        fibonacciNumbersArray.push(a + b);
    }

    console.log(fibonacciNumbersArray);
}



