function generateMatrix() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const matrixContainer = document.getElementById('matrixContainer');
    
    matrixContainer.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('matrix-row');

        for (let j = 0; j < columns; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add('matrix-cell');
            input.setAttribute('oninput', 'this.value = this.value.replace(/[^0-9]/g, "")'); // Restrict input to numbers
            rowDiv.appendChild(input);
        }

        matrixContainer.appendChild(rowDiv);
    }
}

function generateResult() {
    const rows = document.getElementById('matrixContainer').getElementsByClassName('matrix-row');
    let max = Number.MIN_SAFE_INTEGER;
    let maxRow = -1;
    let maxCol = -1;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByClassName('matrix-cell');
        for (let j = 0; j < cells.length; j++) {
            const cellValue = parseInt(cells[j].value, 10);
            if (cellValue > max) {
                max = cellValue;
                maxRow = i;
                maxCol = j;
            }
        }
    }

    let leftValue = 'No left value';
    let rightValue = 'No right value';
    
    if (maxRow !== -1) {
        if (maxCol > 0) {
            leftValue = rows[maxRow].getElementsByClassName('matrix-cell')[maxCol - 1].value || 'No left value';
        }
        
        if (maxCol < rows[maxRow].getElementsByClassName('matrix-cell').length - 1) {
            rightValue = rows[maxRow].getElementsByClassName('matrix-cell')[maxCol + 1].value || 'No right value';
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Maximum Value: ${max === Number.MIN_SAFE_INTEGER ? 'No values entered' : max}</p>
        <p>Left Value of Maximum: ${leftValue}</p>
        <p>Right Value of Maximum: ${rightValue}</p>
    `;
}
