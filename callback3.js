function checkPrime(number) {
    for (let j = 2; j < number; j++) {
        if(number%j == 0) {
            return false;
        }
    }
    return true;
}

function checkOodEvenPrime(number1, number2, print) {
    for (let i = number1; i <= number2; i++) {
        isPrime = checkPrime(i)
        if(isPrime) {
            print(i+' : prime')
        } else if(i%2 == 0) {
            print(i+' : even')
        } else {
            print(i+' : odd')
        }
    }
}

function print(message) {
    console.log(message)
}

number1 = 4;
number2 = 15;
checkOodEvenPrime(number1, number2, print)
