function groupSeats(seatingArrangement, n) {
  const rows = seatingArrangement.length;
  const cols = seatingArrangement[0].length;

  let count = 0;

  for (let k = 0; k< rows; k++) {
    let consecutiveSeats = 0;
    let h= 0;

    while (h < cols) {
      if (seatingArrangement[k][h] === 0) {
        consecutiveSeats++;
      } else {
        consecutiveSeats = 0;
      }

      if (consecutiveSeats === n) {
        count++;
        consecutiveSeats--;
      }

      h++;
    }
  }

  return count;
}


const seatingArrangement1 = [
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
];
const n1 = 2;
console.log(groupSeats(seatingArrangement1, n1)); 

const seatingArrangement2 = [
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
];
const n2 = 4;
console.log(groupSeats(seatingArrangement2, n2)); 