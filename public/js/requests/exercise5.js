async function ConvertMilesToKilometers() 
{
    let miles = document.getElementById('miles').value;

    const req = await requester('post', '5', { miles }, ({ data: { message }}) => {
        document.getElementById('resultValue').textContent = `A distância em quilometros é: ${message}`;
    });
    console.log(req);
};