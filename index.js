let p1ScoreDisplay = document.getElementById("p1-score-display")
let p2ScoreDisplay = document.getElementById("p2-score-display")
let winnerResult = document.getElementById("winner-result")
let p1PointDisplay = document.getElementById("p1-point-display")
let p2PointDisplay = document.getElementById("p2-point-display")
let diffEl = document.getElementById("diff-el")

let p1Score = 0
let p2Score = 0

let p1Point = 0
let p2Point = 0

function drawRandomNumber() {
  return Math.floor(Math.random() * 10000) + 1
}

function startGame() {
  renderGame()
}


function renderGame() {
  p1Score = drawRandomNumber()
  p2Score = drawRandomNumber()

  p1ScoreDisplay.textContent = "Score: " + p1Score
  p2ScoreDisplay.textContent = "Score: " + p2Score

  if (p1Score > p2Score) {
    p1Point += 1
    p1PointDisplay.textContent = "Wins: " + p1Point
    let diff = p1Score - p2Score
    winnerResult.textContent = "Winner: Am"
    diffEl.textContent = "(" + "+" + diff + ")"
  } else if (p2Score > p1Score) {
    p2Point += 1
    p2PointDisplay.textContent = "Wins: " + p2Point
    let diff = p2Score - p1Score
    winnerResult.textContent = "Winner: Nastja"
    diffEl.textContent = "(" + "+" + diff + ")"
  } else {
    winnerResult.textContent = "Winner: Draw"
  }

}

