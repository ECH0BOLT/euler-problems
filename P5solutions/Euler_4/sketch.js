function setup() {

  for (var i = 900; i < 1000; i++) {
    for (var j = 900; j < 1000; j++) {
      var num = i * j;
      if (num - reverseNum(num) == 0) {
        print(num);

      }
    }
  }




}

function reverseNum(num) {
  var prevNum = 0;

  for (i = 0; i < 6; i++) {
    prevNum = prevNum * 10 + num % 10;
    num = floor(num / 10);

  }

  return prevNum;

}