function ConvertMilesToKilometers() 
{
    let miles = parseFloat(document.getElementById('miles').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(miles)) 
    {
        const result = miles * 1.60934
        document.getElementById('resultValue').textContent = `A distância em quilometros é: ${result}`;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira um número válido';
    }
}