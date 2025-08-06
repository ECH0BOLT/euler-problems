function setup() {
  var sum = 0;
  var sum2 = 0;
  for(i = 1; i <= 100; i++){
  	sum += pow(i, 2);
    sum2 += i;
  }
  sum2 = pow(sum2, 2);
  var ans = sum2 - sum;
  print(ans);
}