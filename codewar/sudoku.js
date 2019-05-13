var sudokuArr = [
    [8, 0, 0, 5, 0, 0, 0, 0, 3],
    [0, 0, 5, 0, 6, 0, 1, 0, 0],
    [7, 0, 0, 0, 0, 1, 0, 2, 4],
    [0, 5, 0, 0, 8, 0, 3, 0, 0],
    [1, 0, 0, 0, 0, 0, 2, 0, 7],
    [0, 0, 7, 0, 2, 0, 0, 4, 0],
    [5, 7, 0, 3, 0, 0, 0, 0, 6],
    [0, 0, 3, 0, 4, 0, 7, 0, 0],
    [4, 0, 0, 0, 0, 5, 0, 0, 9]
];

function sudoku(arr) {
    let find = false;
      let line, col;
      for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
              if (!arr[i][j]) {
                  find = true;
                  line = i;
                  col = j;
                  break;
              }
          }
          if (find) {
              break;
          }
      }
      if (!find) {
          return arr;
      }
  
      const possiblsNums = getAllPossible(arr, line, col);
      if(!possiblsNums || !possiblsNums.length){
          return null;
      }
  
      for(var num of possiblsNums){
          arr[line][col] = num;
          if(sudoku(arr)){
              return arr;
          }
          arr[line][col] = 0;
      }
      return null;
  }
  
  function getAllPossible(arr, i, j){
      let allPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let exists = arr[i].filter(c => c);
      for (let i = 0; i < 9; i++) {
          if (arr[i][j] && !exists.includes(arr[i][j])) {
              exists.push(arr[i][j]);
          }
      }
      
      const startRow = Math.floor(i/3) * 3;
      const endRow = startRow+ 2;
      const startCol = Math.floor(j/3) * 3;
      const endCol = startCol+ 2;
      for(m=startRow;m<=endRow;m++){
          for(n=startCol;n<=endCol;n++){
              if(arr[m][n] && !exists.includes(arr[m][n])){
                  exists.push(arr[m][n]);
              }
          }
      }
  
      allPossible = allPossible.filter((c)=>{
          return !exists.includes(c);
      });
      return allPossible;
  }

function display(arr) {
    for (var line of arr) {
        console.log(line.join(' '));
    }
}


var c = sudoku(sudokuArr);
console.log();
console.log(c);

