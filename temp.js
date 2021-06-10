const board = [[1, 0, 2],
               [1, 1, 2],
               [1, 2, 2]]
function check() {
    const w1 = win(1);
    const w2 = win(2);
    if (w1 && w2) {
        return 0;
    }
    if (w1) {
        return 1;
    }
    if (w2) {
        return 2;
    }
    return -1;
}
function win(flag) {
    for (let i = 0; i < 3; i++) {
        if (flag == board[i][0] && flag == board[i][1] && flag == board[i][2]) {
            return true;
        }
        if (flag == board[0][i] && flag == board[1][i] && flag == board[2][i]) {
            return true;
        }
    }
    if (flag == board[0][0] && flag == board[1][1] && flag == board[2][2]) {
        return true;
    }
    if (flag == board[2][0] && flag == board[1][1] && flag == board[0][2]) {
        return true;
    }
    return false;
}
console.log(check());