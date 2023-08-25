function CalculateMonthlySalary() 
{
    let salary = parseFloat(document.getElementById('salary').value);
    let hoursWorked = parseFloat(document.getElementById('hoursWorked').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(salary) && !isNaN(hoursWorked)) 
    {
        const result = salary * hoursWorked;
        document.getElementById('resultValue').textContent = `O valor a receber este mês é R$: ${result}`;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira dois números válidos';
    }
}