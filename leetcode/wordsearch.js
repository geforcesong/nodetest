var exist = function(board, word) {
    if(board.length == 0) return false; 
    var x = board.length;
    var y = board[0].length;
    for(var i = 0; i < x; i++){
        for(var j = 0; j < y; j++){
            if(dfs(board, word, i, j, 0)) return true; // Search all possible answers
        }
    }
    return false;
}

function dfs(board, word, x, y, index){
    if(x < 0 || y < 0 || x >= board.length || y >= board[0].length) return false; // Check the bound condition
    if(board[x][y] != word[index]) return false; // Does not contain the word
    
    if(index == word.length - 1) return true; // Already found the word
    
    var curr = board[x][y]; // Current visit
    board[x][y] = 0; // Already visited
    if(dfs(board, word, x + 1, y, index + 1)||
       dfs(board, word, x - 1, y, index + 1)||
       dfs(board, word, x, y + 1, index + 1)||
       dfs(board, word, x, y - 1, index + 1)) return true;
    
    board[x][y] = curr;
    return false;
}

console.log(exist(

[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"ABCCED"
));