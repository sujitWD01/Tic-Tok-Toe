

document.addEventListener('DOMContentLoaded', () => {
  let boxes = document.querySelectorAll(".box");
  let resetbtn = document.querySelector("#reset-btn");

  let turn0 = true;

  const Winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const board = ["", "", "", "", "", "", "", "", ""]; 

  boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      
      if (box.innerText !== "") return;

      console.log("box was clicked");

      if (turn0) {
        box.innerText = "O";
        board[index] = "O";
      } else {
        box.innerText = "X";
        board[index] = "X";
      }

      box.style.pointerEvents = "none"; 
      turn0 = !turn0;

      checkwinner();
    });
  });

  
  const checkwinner = () => {
    for (let pattern of Winner) {
      const [a, b, c] = pattern;
      
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(`${board[a]} wins!`);
        
        alert(`${board[a]} wins!`);
        return; 
      }
    }

   
    if (!board.includes("")) {
      console.log("It's a tie!");
    alert("It's a tie!");
    }
  };

  
  resetbtn.addEventListener("click", () => {
    board.fill("");
    boxes.forEach((box) => {
      box.innerText = "";
      box.style.pointerEvents = "auto";
    });
    turn0 = true;
  });
});


