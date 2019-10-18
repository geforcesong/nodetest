enum Enums {
    A = 1,
    B,
    C = 2
}


console.log(Enums.A, Enums.B, Enums.C, Enums.B === Enums.C); // 1 2 2 true