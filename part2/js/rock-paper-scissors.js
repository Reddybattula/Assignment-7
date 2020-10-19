/*eslint-env browser*/


function main() {
    "use strict";
    
    var computerChoice;
    var choice = window.prompt("enter rock, paper, or scissors");
    var number = Math.floor(Math.random() * 3 + 1);
    
    if (number === 1) {
	computerChoice = "rock";
    } else if(number === 2) {
	computerChoice = "paper";
    } else {
	computerChoice = "scissors";
    }
    
   
    
    
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
          
         if(choice === computerChoice){
        window.alert( "The result is a tie!");
    }
    else if(choice === "rock"){
        if(computerChoice === "scissors"){
            window.alert("user chose rock, computer chose scissors and winner is user" );
        }
        else if(computerChoice==="paper"){
            window.alert("user chose rock, computer chose paper and winner is computer" );
          
        }
    }
    else if(choice === "paper"){
        if(computerChoice === "scissors"){
             window.alert("user chose paper, computer chose scissors and winner is computer" );
            
        }
        else if(computerChoice === "rock"){
            window.alert("user chose paper, computer chose rock and winner is user" );
            
        }
    }
    
    else if(choice === "scissors"){
        if(computerChoice==="paper"){
            window.alert("user chose scissors, computer chose paper and winner is user" );
            
        }
        else if(computerChoice==="rock"){
            window.alert("user chose scissors, computer chose rock and winner is computer" );
           
        }
    }
    
    }
    else {
    window.document.write("Enter either rock or  paper or scissors" );
}
  
}

main();