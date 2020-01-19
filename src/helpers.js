export function nestedArray(row, col) {
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

export function populateNestedArray(nestedArray, bombVal, count) {
  let rows = nestedArray.length;
  let cols = nestedArray[0].length;
  while (count) {
    let y = floorRand(rows);
    let x = floorRand(cols);
    if (!nestedArray[y][x]) {
      nestedArray[y][x] = bombVal;
      count--;
    }
  }
  return nestedArray;
}

function floorRand(scale) {
  return Math.floor(Math.random() * scale);
}

export function valsAdjacentCount(nestedArray, bombVal) {
  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[0].length; j++) {
      if (nestedArray[i][i] === bombVal) {
        nestedArray = addOneNestedArrayAdjacents(nestedArray, i, j, bombVal);
      }
    }
  }
  return nestedArray;
}

function addOneNestedArrayAdjacents(nestedArray, i, j, bombVal) {
  let iList = [i - 1, i, i + 1];
  let jList = [j - 1, j, j + 1];
  for (let a of iList) {
    if (nestedArray[a]) {
      for (let b of jList) {
        if (nestedArray[a][b] !== undefined && nestedArray[a][b] !== bombVal) {
          if (typeof nestedArray[a][b] !== "number") {
            nestedArray[a][b] = 0;
          } else {
            nestedArray[a][b]++;
          }
        }
      }
    }
  }
  return nestedArray;
}
