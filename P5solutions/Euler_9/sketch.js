var a;
var b;
var c;

function setup() {
    for (c = 1; c < 1000; c++) {
        for (b = 1; b < c; b++) {
            for (a = 1; a < b; a++) {
                if ((pow(a, 2) + pow(b, 2)) == pow(c, 2) && (a + b + c) == 1000) {
                    print(a * b * c);
                }
            }
        }
    }
}