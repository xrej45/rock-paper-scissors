
let whoWon = document.querySelector(".whoWon")
let countDiv = document.querySelector(".count")
document.querySelector(".rock").addEventListener("click",()=>{playRound("rock")})
document.querySelector(".paper").addEventListener("click",()=>{playRound("paper")})
document.querySelector(".scissors").addEventListener("click",()=>{playRound("scissors")})
let humanCount = 0;
let computerCount = 0;
        function playRound(humanChoice){
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
                    whoWon.setAttribute("style", "background:url(checkmark.png);background-position: center;background-size: cover;");
                    console.log(humanChoice)
                    console.log(computerChoice)
                    humanCount++;
                    countDiv.textContent = `you won: ${humanCount} : ${computerCount}`
                    console.log(`you won: ${humanCount} : ${computerCount}`)
                }
                else if (humanChoice==="paper"&&computerChoice==="rock"){
                    whoWon.setAttribute("style", "background:url(checkmark.png);background-position: center;background-size: cover;");
                    console.log(humanChoice)
                    console.log(computerChoice)
                    humanCount++;
                    countDiv.textContent = `you won: ${humanCount} : ${computerCount}`
                    console.log(`you won: ${humanCount}: ${computerCount}`)
                }
                else if(humanChoice==="scissors"&&computerChoice==="paper"){
                    whoWon.setAttribute("style", "background:url(checkmark.png);background-position: center;background-size: cover;");
                    console.log(humanChoice)
                    console.log(computerChoice)
                    humanCount++
                    countDiv.textContent = `you won: ${humanCount} : ${computerCount}`
                    console.log(`you won: ${humanCount}: ${computerCount}`)
                }
                else if(humanChoice===computerChoice){
                    whoWon.setAttribute("style", "background:url(tie.webp);background-position: center;background-size: contain;");

                    console.log(humanChoice)
                    console.log(computerChoice)
                    countDiv.textContent = `tie: ${humanCount} : ${computerCount}`
                    console.log(`tie: ${humanCount}: ${computerCount}`)

                }
                else if(humanChoice==123){
                    humanCount++
                    console.log(`you won: ${humanCount}: ${computerCount}`)
                }
                else{
                    whoWon.setAttribute("style", "background:url(cross.png);background-position: center;background-size: cover;");
                    console.log(humanChoice)
                    console.log(computerChoice)
                    computerCount++
                    countDiv.textContent = `you lost: ${humanCount} : ${computerCount}`
                    console.log(`computer won: ${humanCount}: ${computerCount}`)
                }

            
        }
    
        console.log(`you won`)
    