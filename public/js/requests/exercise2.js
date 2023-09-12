async function CalculateMonthlySalary() 
{
    let salary = document.getElementById('salary').value;
    let hoursWorked = document.getElementById('hoursWorked').value;

    const req = await requester('post', '2', { salary, hoursWorked }, ({ data: { message }}) => {
        if (!isNaN(salary) && !isNaN(hoursWorked)) 
        {
            document.getElementById('resultValue').textContent = `O valor a receber este mês é R$: ${message}`;
        } 
        else 
        {
            document.getElementById('resultValue').textContent = 'Insira dois números válidos';
        }
    })
    console.log(req);
};