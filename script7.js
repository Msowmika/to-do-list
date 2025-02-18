const boxes = document.querySelectorAll(".box")
const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector(".winner")
const newButton = document.querySelector(".new-btn")
const resetButton = document.querySelector(".reset-btn")
const countDisplay = document.querySelector(".count")
let count = 0;
let gameWon = false
let turnO = true;

const winPatterns = 
[ [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

boxes.forEach(box => {
    box.addEventListener("click", ()=> {
        if(!box.textContent){
            count++;
            // countDisplay.textContent = count
        }
    if(turnO) {
        box.innerText = "O"
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner()
    })
})

function showDraw(){
    msg.innerText = "😐It's a Draw"
    msgContainer.classList.remove("hide")
    disableBoxes();
}

function checkWinner(){
    for(let pattern of winPatterns){
        let patVal1 = boxes[pattern[0]].innerText
        let patVal2 = boxes[pattern[1]].innerText
        let patVal3 = boxes[pattern[2]].innerText
    if(patVal1 != "" && patVal2 != "" && patVal3 != ""){
        if(patVal1 == patVal2 && patVal2 == patVal3){
            console.log("winner" + patVal1)
            showWinner(patVal1)
        }
    }
    }
    if(count ===boxes.length && !gameWon){
        // console.log("It's a draw")
        showDraw()
    }
}

function showWinner(winner){
    gameWon = true
   msg.innerText = `☺️Congratulations Winner is ${winner}`
   msgContainer.classList.remove("hide")
   disableBoxes()

}

function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
    count = 0;
    gameWon = false;
    // countDisplay.textContent = count;
}

function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function resetGame(){
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}



newButton.addEventListener("click",resetGame)
resetButton.addEventListener("click",resetGame)

