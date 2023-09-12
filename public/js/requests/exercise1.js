async function SumTwoNumbers() 
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    const req = await requester('post', '1', { num1, num2 }, ({ data: { message }}) => {
        if (!isNaN(num1) && !isNaN(num2)) 
        {
            document.getElementById('resultValue').textContent = `A soma dos números é: ${message}`;
        } 
        else
        {
            document.getElementById('resultValue').textContent = 'Insira um número válido';
        }
    })
    console.log(req);
};