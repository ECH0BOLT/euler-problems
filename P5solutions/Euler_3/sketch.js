function setup() {
  createCanvas(400, 400);
  var n = 600851475143;
  var record = 0;
  while(n % 2 == 0){
    n /= 2
  }
  for(i = 3; i < sqrt(n); i+= 2){
    if(n % i == 0){
   n /= i
    }
  }
  print(n)
}