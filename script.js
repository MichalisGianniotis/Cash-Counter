// function displayresult() {
//             let res = document.getElementById("result");
//             res.style.display = "block";
//         }
function countOnes(cash) {
    return cash * 1;
}
function countTwos(cash) {
    return cash * 2;
}
function countFives(cash) {
    return cash * 5;
}
function countTens(cash) {
    return cash * 10;
}
function countTwenties(cash) {
    return cash * 20;
}
function countFifties(cash) {
    return cash * 50;
}
function countHundreds(cash) {
    return cash * 100;
}
function countTwoHundreds(cash) {
    return cash * 200;
}
function sumOfCash() {
    let ones = document.getElementById("i1").value;
    let twos = document.getElementById("i2").value;
    let fives = document.getElementById("i3").value;
    let tens = document.getElementById("i4").value;
    let twenties = document.getElementById("i5").value;
    let fifties = document.getElementById("i6").value;
    let hundreds = document.getElementById("i7").value;
    let twoHundreds = document.getElementById("i8").value;
    ones = countOnes(ones);
    twos = countTwos(twos);
    fives = countFives(fives);
    tens = countTens(tens);
    twenties = countTwenties(twenties);
    fifties = countFifties(fifties);
    hundreds = countHundreds(hundreds);
    twoHundreds = countTwoHundreds(twoHundreds);
    let sum = ones + twos + fives + tens + twenties + fifties + hundreds + twoHundreds;
    let result = document.getElementById("result");
    result.textContent =  "Έχεις : " + sum + " €";
}