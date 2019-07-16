function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if(number%i == 0) {
            return false;
        }
    }
    return true;
}
function checkOodEvenPrime(number, print) {
    isPrime = checkPrime(number)

    if(isPrime) {
        print('prime')
    } else if(number%2 == 0) {
        print('even')
    } else {
        print('odd')
    }
}
function print(message) {
    console.log(message)
}
number = 15
checkOodEvenPrime(number, print)
