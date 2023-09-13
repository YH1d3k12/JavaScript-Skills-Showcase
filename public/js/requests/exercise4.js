async function ConvertCelsiusToFahrenheit() 
{
    let celsius = document.getElementById('celsius').value;

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    const req = await requester('post', '4', { celsius }, ({data : {message}}) => {
        if (!isNaN(celsius)) 
        {
            document.getElementById('resultValue').textContent = `A temperatura em Fahrenheit é: ${message}`;
        } else 
        {
            document.getElementById('resultValue').textContent = 'Insira um número válido';
        }
    });
    console.log(req);
}