// // "use strict";


// // var nm = prompt("What is your name");
// // alert("welcome to lab02 website "+nm);

// // var mood = prompt("Are you happy ? ").toLowerCase();

// // console.log(mood);
// // console.log(mood.toLowerCase());
// // console.log(mood.toUpperCase());
// // switch (mood) {
// //     case "yes":
// //     case "y":
// //         alert("That is amazing");
// //         break;
// //     case "no":
// //     case "n":
// //         alert("I hope you will be happy in the future");
// //         break;

// // }




// // var softwaredevoloper = prompt("Are you a software devoloper ? ").toLowerCase();
// // console.log(softwaredevoloper);
// // console.log(softwaredevoloper.toLowerCase());
// // console.log(softwaredevoloper.toUpperCase());
// // switch (softwaredevoloper) {
// //     case "yes":
// //     case "y":
// //         alert("That is amazing mee too");
// //         break;
// //     case "no":
// //     case "n":
// //         alert("you should learn software devolopment");
// //         break;

// // }



// // var Nationality = prompt("Are you Jodanian?").toLowerCase();
// // console.log(Nationality);
// // console.log(Nationality.toLowerCase());
// // console.log(Nationality.toUpperCase());
// // switch (Nationality) {
// //     case "yes":
// //     case "y":
// //         alert("amazing me too");
// //         break;
// //     case "no":
// //     case "n":
// //         alert("welcome to jordan");
// //         break;

// // }



// // var language = prompt("Do you speak arabic?").toLowerCase();


// // console.log(language);
// // console.log(language.toLowerCase());
// // console.log(language.toUpperCase());
// // switch (language) {
// //     case "yes":
// //     case "y":
// //         alert("amazing me too");
// //         break;
// //     case "no":
// //     case "n":
// //         alert("you should learn the arabic language");
// //         break;

// // }


// // var Residence = prompt("Do you live in Jordan?").toLowerCase();
// // console.log(Residence);
// // console.log(Residence.toLowerCase());
// // console.log(Residence.toUpperCase());
// // switch (Residence) {
// //     case "yes":
// //     case "y":
// //         alert("amazing me too");
// //         break;
// //     case "no":
// //     case "n":
// //         alert("you should visit jordan");
// //         break;

// // }

// alert("Tank you for answering the queations "+nm);

'use strict';

var score = 0;
var name = '';

welcome();  


function welcome(){
    alert('Welcome To My Web Site ');
    name = prompt('Enter Your Name');
    console.log(name);
    alert('Welcome ' + name);
    
    alert('i would like to ask you 7 questions please answer with y/n or yes/no To get the score');
    Question1(); 
    Question2(); 
    Question3();
    Question4();
    Question5();
    Question6();
    Question7();
    lastAlert();
    
}
//Question 1

function Question1(){
    var language = prompt(' Q1 Do i love language learning? ');
    var language2 = language.toLowerCase();
    console.log( language2 );
    
    if (language2 == 'y' || language2 == 'yes') {
        alert('your answer is true i language learning ');
        score++;
    }
    else if (language2 == 'n' || language2 == 'no') {
        alert('your answer is false ');
    }
    else {
        alert('you should enter y/n or yes/no');
    }
}


//question 2

function Question2(){
    var coffie = prompt(' Q2 Do i love coffie ? ');
    var coffie2 = coffie.toLowerCase();
    console.log(coffie2);
    
    if (coffie2 == 'y' || coffie2 == 'yes') {
        alert('your answer is false');
    }
    else if (coffie2 == 'n' || coffie2 == 'no') {
        alert('your answer is true i don\'t like coffie ');
        score++;
    }
    else {
        alert('you should enter y/n or yes/no');
    }
    
}

// //question 3
function Question3(){
    var mansaf = prompt(' Q3 Do i love mansaf ? ');
    var mansaf2 = mansaf.toLowerCase();
    console.log(mansaf2);

    if (mansaf2 == 'y' || mansaf2 == 'yes') {
        alert('your answer is true i love Mansaf ');
        score++;
    }
    else if (mansaf2 == 'n' || mansaf2 == 'no') {
        alert('your answer is false ');
    }
    else {
        alert('you should enter y/n or yes/no');
    }

}


// //Question 4
function Question4(){
    var playgame = prompt(' Q4 Do i love playing game ? ');
    var playgame2 = playgame.toLowerCase();
    console.log(playgame2);
    
    if (playgame2 == 'y' || playgame2 == 'yes') {
        alert('your answer is true i play game');
        score++;
    }
    else if (playgame2 == 'n' || playgame2 == 'no') {
        alert('your answer is false');
    }
    else {
        alert('you should enter y/n or yes/no');
    }
    
}

// //Question 5
function Question5(){
    var playf = prompt(' Q5 Do i love play football ? ');
    var playf2 = playf.toUpperCase();
    console.log(playf2);

    if (playf2 == 'Y' || playf2 == 'YES') {

        alert('your answer is false i hat playing football');

    }
    else if (playf2 == 'N' || playf2 == 'NO') {
        alert('your answer is true ');
        score++;
    }
    else {
        alert('you should enter y/n or yes/no');
    }
}




// //Question 6
function Question6(){
        var counter = 1;
    var answerWrong = false;
    var myHeight = 178;

    while (counter < 6) {
        var number = parseInt(prompt('Q 6 Guess My Height'));

        if (number > myHeight) {
            alert('You guessed too high! Guess again ');

        }
        else if (number < myHeight) {
            alert('You guessed too low! Guess again ');

        }
        else if (number == myHeight) {
            alert('That is correct! my height is 178!');
            score++;
            answerWrong = true;
            break;
        }
        console.log(counter);
        console.log(number);
        counter++;
    }
    if (!answerWrong) {
        alert('Sorry you run out of guesses My height Is 178 ');
    }
}


//Question 7
function Question7(){
    var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite fruit?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++) {
            if (guess === userFavFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Sorry wrong answer, try again');
        } 
        console.log(userAnsw);
    }

}

function lastAlert(){
    alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

    alert(` Thank You  ${name} For Answer The Questions You got  ${score} / 7 `);
}

