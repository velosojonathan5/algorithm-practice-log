const land = 1;
const water = 0;

function islandPerimeter(grid) {
    let perimeter = 0;
    
    const bottom = grid.length - 1;
    const right = grid[0].length - 1;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j];
            if (cell === water) continue;
            let top = 0;
            let left = 0;
            let rightNeighbor = 0;
            let bottomNeighbor = 0;

            if (i > 0) top = grid[i - 1][j];
            if (j > 0) left = grid[i][j - 1];
            if (i < bottom) bottomNeighbor = grid[i + 1][j];
            if (j < right) rightNeighbor = grid[i][j + 1];

            const sum = 4 - top - left - rightNeighbor - bottomNeighbor;
            perimeter += sum;
        }
    }

    return perimeter;
};

// Casos de teste
console.log("Teste 1:", islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]), "Esperado: 16");
console.log("Teste 2:", islandPerimeter([[1]]), "Esperado: 4");
console.log("Teste 3:", islandPerimeter([[1,0]]), "Esperado: 4");