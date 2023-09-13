async function SumTwoNumbers() 
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    const req = await requester('post', '1', { num1, num2 }, ({ data: { message }}) => {
        document.getElementById('resultValue').textContent = `A soma dos números é: ${message}`;
    });
    console.log(req);
};