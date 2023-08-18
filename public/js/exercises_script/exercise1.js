function SumTwoNumbers() 
{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Checks if method is being clicked
    console.log("Clicou na função SumTwoNumbers");

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(num1) && !isNaN(num2)) 
    {
        const result = num1 + num2;
        document.getElementById('result_value').textContent = `${result}`;
    } else 
    {
        document.getElementById('result_value').textContent = 'Insira dois números válidos';
    }
}