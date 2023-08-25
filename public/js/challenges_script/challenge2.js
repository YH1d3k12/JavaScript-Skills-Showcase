function SwapValues()
{
    let A = parseFloat(document.getElementById('valueA').value);
    let B = parseFloat(document.getElementById('valueB').value);

    if (!isNaN(A) && !isNaN(B)) {

        A = A + B;
        B = A - B;
        A = A - B;

        document.getElementById('resultValue').innerHTML = `<br> Valor de A: ${A} <br> Valor de B: ${B}`;
    } else {
        document.getElementById('resultValue').textContent = 'Insira números válidos';
    }
}