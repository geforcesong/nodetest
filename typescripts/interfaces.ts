interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return { color: '', area: 10 };
}
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

