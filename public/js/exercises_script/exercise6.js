function ConvertSecondsToTime() 
{
    console.log("clicou")
    let seconds = parseFloat(document.getElementById('seconds').value);

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    if (!isNaN(seconds)) 
    {
        let hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        
        document.getElementById('resultValue').textContent = `${hours} Hora(s) ${minutes} Minuto(s) ${seconds} Segundo(s)`;
    } else 
    {
        document.getElementById('resultValue').textContent = 'Insira um número válido';
    }
}