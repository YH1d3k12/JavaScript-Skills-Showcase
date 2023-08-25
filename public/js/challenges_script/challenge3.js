function WhichOneIsHigher()
{
    let inputA = parseFloat(document.getElementById('inputA').value);
    let inputB = parseFloat(document.getElementById('inputB').value);

    if (!isNaN(inputA) && !isNaN(inputB)) {

        if (inputA > inputB)
        {
            document.getElementById('resultValue').textContent = `A ${inputA} é maior que B ${inputB}`;
        } 
        else if (inputA < inputB)
        {
            document.getElementById('resultValue').textContent = `B ${inputB} é maior que A ${inputA}`;
        }
        else
        {
            document.getElementById('resultValue').textContent = `A ${inputA} e B ${inputB} são iguais`;
        }
    } else {
        document.getElementById('resultValue').textContent = 'Insira números válidos';
    }
}