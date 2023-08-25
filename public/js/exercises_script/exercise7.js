function ConvertKmToMeterAndCm() 
{
    let km = parseFloat(document.getElementById('km').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(km)) 
    {
        let m = km * 1000;
        let cm = m * 100;
        
        document.getElementById('resultValue').innerHTML = `<br> Quilometros para metros: ${m}m <br> Quilometros para centimetros ${cm}cm`;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira um número válido';
    }
}