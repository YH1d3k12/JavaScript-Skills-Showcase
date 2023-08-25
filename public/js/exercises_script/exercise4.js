function ConvertCelsiusToFahrenheit() 
{
    let celsius = parseFloat(document.getElementById('celsius').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(celsius)) 
    {
        const result = (9 * celsius + 160) / 5;
        document.getElementById('resultValue').textContent = `A temperatura em Fahrenheit é: ${result}`;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira um número válido';
    }
}