function playGame(){
    let humanCount = 0;
    let computerCount = 0;
    do{
        function playRound(){
            let humanChoice = prompt("choose rock or paper or scissors").toLowerCase();
            let computerChoice = getComputerChoice();
            function getComputerChoice(){
                let tempVar = Math.random() *3
                if(tempVar < 1.0){
                    return "rock"
                }
                else if(tempVar < 2.0){
                    return "paper"
                }
                else if(tempVar < 3.0){
                    return "scissors"
                }};
            
                if (humanChoice ==="rock"&&computerChoice==="scissors"){
                    console.log(humanChoice)
                    console.log(computerChoice)
                    humanCount++;
                    console.log(`you won: ${humanCount} : ${computerCount}`)
                }
                else if (humanChoice==="paper"&&computerChoice==="rock"){
                    console.log(humanChoice)
                    console.log(computerChoice)
                    humanCount++;
                    console.log(`you won: ${humanCount}: ${computerCount}`)
                }
                else if(humanChoice==="scissors"&&computerChoice==="paper"){
                    console.log(humanChoice)
                    console.log(computerChoice)
                    humanCount++
                    console.log(`you won: ${humanCount}: ${computerCount}`)
                }
                else if(humanChoice===computerChoice){
                    console.log(humanChoice)
                    console.log(computerChoice)
                    console.log(`tie: ${humanCount}: ${computerCount}`)

                }
                else if(humanChoice==123){
                    humanCount++
                    console.log(`you won: ${humanCount}: ${computerCount}`)
                }
                else{
                    console.log(humanChoice)
                    console.log(computerChoice)
                    computerCount++
                    console.log(`computer won: ${humanCount}: ${computerCount}`)
                }

            
        }
        playRound()
      }while(humanCount < 5)
    
        console.log(`you won`)
    

}
setTimeout(playGame(),3000)