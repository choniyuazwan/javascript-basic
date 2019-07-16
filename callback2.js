function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if(number%i == 0) {
            return false;
        }
    }
    return true;
}
function checkOodEvenPrime(number, callback) {
    isPrime = checkPrime(number)

    if(isPrime) {
        setTimeout(() => { callback('prime') }, 1000);
        // print('prime')
    } else if(number%2 == 0) {
        setTimeout(() => { callback('even') }, 1000);
    } else {
        setTimeout(() => { callback('odd') }, 1000);
    }
}
function print(message) {
    console.log(message)
}

number = 14
let pesan = '-';
checkOodEvenPrime(number, (out) => { pesan = out; })

console.log(pesan);
setTimeout(() => {
    console.log(pesan);    
}, 2000);