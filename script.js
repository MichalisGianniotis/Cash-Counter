function sumOfCash() {
    let ones = document.getElementById("i1").value * 1;
    let twos = document.getElementById("i2").value * 2;
    let fives = document.getElementById("i3").value * 5;
    let tens = document.getElementById("i4").value * 10;
    let twenties = document.getElementById("i5").value * 20;
    let fifties = document.getElementById("i6").value * 50;
    let hundreds = document.getElementById("i7").value * 100;
    let twoHundreds = document.getElementById("i8").value * 200;

    let sum = ones + twos + fives + tens + twenties + fifties + hundreds + twoHundreds;
    let result = document.getElementById("result");
    result.textContent =  "Έχεις : " + sum + " €";
}