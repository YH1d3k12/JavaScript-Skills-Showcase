async function BMICalculator() 
{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    const req = await requester('post', '9', { weight, height }, ({ data: { message }}) => {
        if (!isNaN(message)) 
        {
            document.getElementById('resultValue').textContent = `A distância em quilometros é: ${message}`;
        } else {
            document.getElementById('resultValue').textContent = 'Insira um número válido';
        }
    })
    console.log(req);
};