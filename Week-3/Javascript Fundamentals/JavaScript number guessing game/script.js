
let totalGuesses=10
let x=0
function guess(){
x=prompt("Enter a Number between 1 and 100")
if(isNaN(x)){
    alert("Please enter a number")
    guess()
  
}

console.log(x)
}

alert("Now it's your time to guess")

function playGuessingGame(c){
    let y=prompt("Guess a Number between 1 and 100")
    if(isNaN(y)){
        alert("Please enter a number")
        return playGuessingGame(c)
    }
    if(c>10){
        return "all guesses over"
        
    }
    if(y>x){
        alert("Number is smaller")
        return playGuessingGame(c+1)
    }
    else if(y<x){
        alert("Number is greater")
        return playGuessingGame(c+1)
    }
    else{
        alert("You got it in ${c}")
        return c
    }

}

function playGuessingGame(c,k){
    let y=prompt("Guess a Number between 1 and 100")
    if(isNaN(y)){
        alert("Please enter a number")
        return playGuessingGame(c)
    }
    if(c>k){
        return "all guesses over"
        
    }
    if(y>x){
        alert("Number is smaller")
        return playGuessingGame(c+1)
    }
    else if(y<x){
        alert("Number is greater")
        return playGuessingGame(c+1)
    }
    else{
        return c
    }

}

guess()


alert(`You got it in ${playGuessingGame(0)} attempts`)







// playGuessingGame()