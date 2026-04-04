function matrixReshape(mat, r, c) {
    const total = r * c;
    const matC = mat[0].length;
    const matR = mat.length;
    if(total !== matC * matR) return mat;
    
    const line = [[]];

    for(let n = 1; n <= total ; n++) {
        const i = Math.ceil(n / matC) - 1;
        const j = (n-1) - (i * matC);
        line[0].push(mat[i][j])
    }

    const newMat = [];
    for(let i = 1; i <= r ; i++) newMat.push(new Array(c));

    for(let n = 1; n <= line[0].length ; n++) {
        const i = Math.ceil(n / c) - 1;
        const j = (n-1) - (i * c);
        newMat[i][j] = line[0][n - 1];
    }
    
    return newMat;
};

// Casos de teste
console.log("Teste 1:", JSON.stringify(matrixReshape([[1,2],[3,4]], 1, 4)), "Esperado: [[1,2,3,4]]");
console.log("Teste 2:", JSON.stringify(matrixReshape([[1,2],[3,4]], 2, 4)), "Esperado: [[1,2],[3,4]]");
console.log("Teste 3:", JSON.stringify(matrixReshape([[1,2,3],[4,5,6]], 3, 2)), "Esperado: [[1,2],[3,4],[5,6]]");
console.log("Teste 4:", JSON.stringify(matrixReshape([[1]], 1, 1)), "Esperado: [[1]]");