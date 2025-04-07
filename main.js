const cardContainer = document.getElementById('card');
const drawBtn = document.getElementById('draw');
const drawnNumber = document.getElementById('drawn-number');
const historyDiv = document.getElementById('history');

let numbers = Array.from({ length: 75 }, (_, i) => i + 1);
let history = [];

function generateCard() {
  cardContainer.innerHTML = '';
  for (let col = 0; col < 5; col++) {
    const colNums = shuffle(
      numbers.slice(col * 15, col * 15 + 15)
    ).slice(0, 5);
    for (let row = 0; row < 5; row++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (col === 2 && row === 2) {
        cell.classList.add('free');
        cell.textContent = 'FREE';
      } else {
        cell.textContent = colNums[row];
      }
      cardContainer.appendChild(cell);
    }
  }
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

drawBtn.onclick = () => {
  if (numbers.length === 0) {
    alert("All numbers drawn!");
    return;
  }
  const index = Math.floor(Math.random() * numbers.length);
  const num = numbers.splice(index, 1)[0];
  history.unshift(num);
  drawnNumber.innerHTML = `<h2>Number: ${num}</h2>`;
  historyDiv.innerHTML = `<p>History: ${history.join(', ')}</p>`;
};

generateCard();
