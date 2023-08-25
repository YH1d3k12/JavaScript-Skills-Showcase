function CreateMultiplicationTable() 
{
    let number = parseFloat(document.getElementById('number').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(number)) 
    {
        let multiplicationTable = '';

        for (i = 1; i <= 10; i++)
        {
            multiplicationTable += `<br> ${number * i} = ${number} x ${i}`; 
        }

        document.getElementById('resultValue').innerHTML = multiplicationTable;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira um número válido';
    }
}