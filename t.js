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