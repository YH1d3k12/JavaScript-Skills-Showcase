async function ConvertCelsiusToFahrenheit() 
{
    let celsius = document.getElementById('celsius').value;

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    const req = await requester('post', '1/4', { celsius }, ({data : {message}}) => {
        document.getElementById('resultValue').textContent = `A temperatura em Fahrenheit é: ${message}`;
    });
    console.log(req);
}