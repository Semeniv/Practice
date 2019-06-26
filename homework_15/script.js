
var count = window.prompt('Please enter first number.', 0);
var b = window.prompt('Please enter second number.', 0);
var currentNumber = 2;

function isNatural(number) {
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
};

nextPrime:
    for (var i = count; i <= b; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i);
    }