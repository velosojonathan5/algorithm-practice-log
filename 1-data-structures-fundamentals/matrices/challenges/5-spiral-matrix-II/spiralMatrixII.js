class Direction {
    options = ['left', 'down', 'right', 'up']
    selectedIndex = 0;

    get selected() {
        return this.options[this.selectedIndex];
    }

    selectNext() {
        if(this.selectedIndex == this.options.length - 1) {
            this.selectedIndex = 0;
            return;
        }
        this.selectedIndex+=1;
    }
}

function generateMatrix(n){
    const direction = new Direction();
    const array = new Array();
    
    for(let i = 0; i < n; i++) array.push(new Array(n))

    let m=n-1;
    let i=0;
    let j=-1;
    let count=1;
    while(n > 0 || m > 0) {
        for(let step = 0; step < n; step++){
            if(direction.selected == 'left') j+=1; else j-=1;
            array[i][j] = count;
            count++;
        }
        direction.selectNext();
        n--;
        for(let step = 0; step < m; step++){
            if(direction.selected == 'down') i+=1; else i-=1;
            array[i][j] = count;
            count++;
        }
        direction.selectNext();
        m--;
    }

    return array;
};

// Test cases
let result1 = generateMatrix(3);
console.log("Result for n=3:", JSON.stringify(result1));
// Expected: [[1,2,3],[8,9,4],[7,6,5]]

let result2 = generateMatrix(1);
console.log("Result for n=1:", JSON.stringify(result2));
// Expected: [[1]]

let result3 = generateMatrix(2);
console.log("Result for n=2:", JSON.stringify(result3));
// Expected: [[1,2],[4,3]]
console.time("Time for n=3");
let result4 = generateMatrix(3);
console.timeEnd("Time for n=3");
// console.log("Result for n=100:", JSON.stringify(result4));