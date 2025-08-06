var cur = 0;
var prev = 1;
var temp;
var sum = 0;
function setup() {
  for (i = 0; i < 100; i++) {
    if ((cur + prev) < 4000000) {
      temp = cur
      cur += prev;
      prev = temp;
      if (cur % 2 == 0) {
        sum += cur;
        if (cur + prev > 4000000) {
          print(sum);

        }
      }
    }
  }
}