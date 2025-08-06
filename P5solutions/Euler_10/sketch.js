function setup() {
   var sum = 0;
    
    for(var i = 0; i < 2000000; i ++){
       if(isPrime(i)){
           sum += i
       }
   }
    print(sum)




}

function isPrime(f) {
    for (var j = 2; j <= sqrt(f); j++) {
        prime = true;
        if (f % j == 0) {
            return false;
        }
    }
    if (f == 1 || f ==0) {
        return false;

    }
    return true;
}