/*jslint devel: true*/
/*eslint-env browser*/

function playGame() {
    "use strict";
    
    // Create the random numbers for the powerball
    var num1 = Math.floor(Math.random() * 101);
    var num2 = Math.floor(Math.random() * 101);
    var num3 = Math.floor(Math.random() * 101);
    var num4 = Math.floor(Math.random() * 101);
    var num5 = Math.floor(Math.random() * 101);
    var num6 = Math.floor(Math.random() * 101);
    var num7 = Math.floor(Math.random() * 101);
    
    // Users guess
    var userNum1 = parseInt(document.getElementById("guess1").value);
    var userNum2 = parseInt(document.getElementById("guess2").value);
    var userNum3 = parseInt(document.getElementById("guess3").value);
    var userNum4 = parseInt(document.getElementById("guess4").value);
    var userNum5 = parseInt(document.getElementById("guess5").value);
    var userNum6 = parseInt(document.getElementById("guess6").value);
    var userNum7 = parseInt(document.getElementById("guess7").value);
    
    // Output each random number
    document.getElementById("test1").innerHTML = num1;
    document.getElementById("test2").innerHTML = num2;
    document.getElementById("test3").innerHTML = num3;
    document.getElementById("test4").innerHTML = num4;
    document.getElementById("test5").innerHTML = num5;
    document.getElementById("test6").innerHTML = num6;
    document.getElementById("test7").innerHTML = num7;
    
    // Set up several conditions to see if any numbers match
    if (num1 === userNum1 || num2 === userNum1) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum1 || num4 === userNum1) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum1 || num6 === userNum1) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum1) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num1 === userNum2 || num2 === userNum2) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum2 || num4 === userNum2) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum2 || num6 === userNum2) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum2) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num1 === userNum3 || num2 === userNum3) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum3 || num4 === userNum3) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum3 || num6 === userNum3) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum3) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num1 === userNum4 || num2 === userNum4) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum4 || num4 === userNum4) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum4 || num6 === userNum4) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum4) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num1 === userNum5 || num2 === userNum5) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum5 || num4 === userNum5) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum5 || num6 === userNum5) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum5) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num1 === userNum6 || num2 === userNum6) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum6 || num4 === userNum6) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum6 || num6 === userNum6) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum6) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num1 === userNum7 || num2 === userNum7) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num3 === userNum7 || num4 === userNum7) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num5 === userNum7 || num6 === userNum7) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (num7 === userNum7) {
        document.getElementById("winner").innerHTML = "You got one!!";
    } else if (userNum1 === num1 && userNum2 === num2 && userNum3 === num3 && userNum4 === num4 && userNum5 === num5 && userNum6 === num6 && userNum7 === num7) {
        document.getElementById("winner").innerHTML = "YOU WIN!!";
    } else {
        document.getElementById("winner").innerHTML = "You Lose!!";
    }
    
}

playGame();