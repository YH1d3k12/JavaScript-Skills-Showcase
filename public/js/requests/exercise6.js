async function ConvertSecondsToTime() 
{
    let seconds = document.getElementById('seconds').value;

    //isNan returns true if the value is not a number, so !isNan returns true if the value is a number
    const req = await requester('post', '1/6', { seconds }, ({ data }) => { 
        document.getElementById('resultValue').textContent = `${data.hours} Hora(s) ${data.minutes} Minuto(s) ${data.seconds} Segundo(s)`;
        console.log(data.message);
    });
    console.log(req);
}