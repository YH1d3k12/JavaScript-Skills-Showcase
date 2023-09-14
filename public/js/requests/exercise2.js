async function CalculateMonthlySalary() 
{
    let salary = document.getElementById('salary').value;
    let hoursWorked = document.getElementById('hoursWorked').value;

    const req = await requester('post', '1/2', { salary, hoursWorked }, ({ data: { message }}) => {
        document.getElementById('resultValue').textContent = `O valor a receber este mês é R$: ${message}`;
    });
    console.log(req);
};