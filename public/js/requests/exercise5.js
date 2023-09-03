async function ConvertMilesToKilometers() 
{
    console.log("clicou")
    let miles = document.getElementById('miles').value;

    const req = await requester('post', '5', { miles }, ({ data: { message }}) => {
        if (!isNaN(message)) 
        {
            document.getElementById('resultValue').textContent = `A distância em quilometros é: ${message}`;
        } else {
            document.getElementById('resultValue').textContent = 'Insira um número válido';
        }
    })
    console.log(req);
};