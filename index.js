let msg1 = document.getElementById("message1");

let answer = Math.floor(Math.random() * 100) + 1;
let noGuess = 0;
console.log(answer)

function clickMe(){
    let userGuess = document.getElementById("guess").value;
    if(userGuess < 1 || userGuess > 100){
        alert("Stupido enter a number between 1 and 100.");
    }
        else if(userGuess < answer){
            msg1.textContent = "Too Low";
        }
        else if(userGuess > answer){
            msg1.textContent = "Too High";
        }
        else if(userGuess === answer){
            msg1.textContent = "YAY You Win!!";
        
        }
}


