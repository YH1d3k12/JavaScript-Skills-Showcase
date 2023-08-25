function CalculateAverageWeight() 
{
    let w1 = parseFloat(document.getElementById('w1').value);
    let w2 = parseFloat(document.getElementById('w2').value);
    let w3 = parseFloat(document.getElementById('w3').value);
    let w4 = parseFloat(document.getElementById('w4').value);
    let w5 = parseFloat(document.getElementById('w5').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(w1) && !isNaN(w2) && !isNaN(w3) && !isNaN(w4) && !isNaN(w5)) 
    {
        const result = (w1 + w2 + w3 + w4 + w5) / 5;
        document.getElementById('resultValue').textContent = `A média de peso é: ${result}`;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira números válidos';
    }
}