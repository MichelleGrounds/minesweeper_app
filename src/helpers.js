function nestedArray(row, col) {
  let outerArray = [];
  for (let i = 0; i < row; i++) {
    let innerArray = [];
    for (let j = 0; j < col; j++) {
      innerArray.push("");
    }
    outerArray.push(innerArray);
  }
  return outerArray;
}

function populateNestedArray(nestedArray, val, count) {
  let rows = nestedArray.length;
  let cols = nestedArray[0].length;
  while (count) {
    let y = floorRand(rows);
    let x = floorRand(cols);
    if (!nestedArray[y][x]) {
      nestedArray[y][x] = val;
      count--;
    }
  }
  return nestedArray;
}
console.log(populateNestedArray(nestedArray(5, 5), "💣", 7));

function floorRand(scale) {
  return Math.floor(Math.random() * scale);
}
