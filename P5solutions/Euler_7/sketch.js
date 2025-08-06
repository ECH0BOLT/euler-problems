var num = 10001
var prime = true;
var scope = 200000;
var primes = [];

function setup() {
    for (var i = 2; i < scope; i++) {
        if (isPrime(i)) {
            primes.push(i)

        }
    }
    if (primes[num + 1] != null) {
        print(primes[num - 1] + " is the " + num + " prime number")
    } else {
        print("Scope too small")
    }
//     for(var g = 0; g < primes.length; g++){
//         print(primes[g])
        
//     }
    print("There are " + primes.length + " primes under " + scope);
}

function isPrime(f) {
    for (var j = 2; j <= f / 2; j++) {
        prime = true;
        if (f % j == 0) {
            return false;
        }
    }
    return true;
}