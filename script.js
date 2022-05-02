//function used to produce random int, max is set for range. if max = 3, possible output 0,1,2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerplay(pick){
    choice = ""
    if (pick == 0){
        choice = "rock"
    } else if(pick == 1){
        choice = "paper"
    }  
    else if (pick ==2){
        choice = "scissor"
    }
    return choice;
}

function playerplay(choice){
    Err = 1
    const choices =["rock","paper","scissors"]
    while (Err =1){
        
        if (choices.includes(choice)==true){
            Err = 0
            return choice
        }else{
            choice = prompt("WHat is your choice? Rock Paper or Scissors?").toLowerCase()
        }
    }
            
}
   
function match(pchoice,cchoice){
    cpoint =0
    point =0
    score = 5
    if (pchoice == "rock"){
        if (cchoice =="rock"){
            score =2
        }else if(cchoice == "paper"){
            score = 0
        }else{
            score = 1
        }
        
    }

    if (pchoice == "paper"){
        if (cchoice =="rock"){
            score = 1
        }else if(cchoice == "paper"){
            score = 2
        }else{
            score = 0
        }
        
    }

    if (pchoice == "scissors"){
        if (cchoice =="rock"){
            score = 0
        }else if(cchoice == "paper"){
            score = 1
        }else{
            score = 2
        }
        
    }

    if (score == 0){
        console.log("The Computer Wins!")
        cpoint = 1
    }else if(score == 1){
        console.log("The Human Wins!")
        point = 1
    }else if(score == 2){
        console.log("TIE!!!!!")
    }else if(score ==5){
        console.log("You didnt enter a correct value,")
    }
    return [point, cpoint];
}


rounds = prompt("How many rounds required to win?")
total = 0
ctotal = 0
while (total< rounds && ctotal<rounds){
    temp = 0
    ctemp = 0
    pick = getRandomInt(3)
    playerchoice = prompt("WHat is your choice? Rock Paper or Scissors?").toLowerCase()
    computerchoice = computerplay(pick)
    console.log("random pick is "+ pick+" which means "+ computerchoice)
    match(playerplay(playerchoice),computerchoice)
    temp = match(playerplay(playerchoice),computerchoice)[0]
    total = total + temp
    ctemp = match(playerplay(playerchoice),computerchoice)[1]
    ctotal = ctotal + ctemp
    console.log("Human Score: "+ total)
    console.log("Computer Score: "+ ctotal)

    if (total == rounds){
        alert("Human Wins!!!")
    }else if (ctotal == rounds){
        alert("Computer Wins!!!")
    }

}




