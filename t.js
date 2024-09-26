//edge cases:

//if the maximum element is either on the left most index or right most index (0 or size-1)
//then we will end up with getting an garbage value of left or right element
//so that, we print "No left element" when the max element is on first index of any row, and "No right element"
// when the max element is on the last index on any row

//if the length of rows in only 1, then we won't have left and right values, so in that case we only the 
//value of max element and print "No left value" and "No right value"

//if all the elements are same, then it will take the first value as the maximum value and will print left 
//value as "No left element" because it will take the first index as max elementd

let max = -Infinity;
let maxInd = { row: -1, column: -1 };
let matrix = [];

function generateMatrix() {
    const row = parseInt(document.getElementById('rows').value);
    const column = parseInt(document.getElementById('columns').value);
    const container = document.getElementById('matrixContainer');

    container.innerHTML = '';
    matrix = [];

    for (let i = 0; i < row; i++) {
        const rowDiv = document.createElement('div');
        matrix[i] = [];

        for (let j = 0; j < column; j++) {
            const inputBox = document.createElement('input');
            inputBox.type = 'number';
            inputBox.value = 0; 
            inputBox.oninput = function () {
                matrix[i][j] = parseInt(inputBox.value) || 0; 
            };

            matrix[i][j] = 0; 
            rowDiv.appendChild(inputBox);
        }
        container.appendChild(rowDiv);
    }
}

function generateResult() {
    const result = document.getElementById('result');

    const rows = matrix.length;
    const columns = matrix[0].length;
    max = -Infinity;
    maxInd = { row: -1, column: -1 };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
                maxInd = { row: i, column: j };
            }
        }
    }

    const left = maxInd.column > 0 ? matrix[maxInd.row][maxInd.column - 1] : "No left element";
    const right = maxInd.column < columns - 1 ? matrix[maxInd.row][maxInd.column + 1] : "No right element";

    result.innerHTML = `
        <p>Max element: ${max}</p>
        <p>Left element: ${left}</p>
        <p>Right element: ${right}</p>
    `;
}