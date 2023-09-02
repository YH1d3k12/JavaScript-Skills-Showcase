function ConvertMilesToKilometers() 
    {
        let miles = parseFloat(document.getElementById('miles').value);
        const req = requester('post', '5', { miles }, ({ data: { message }}) => {
            if (!isNaN(message)) 
            {
                document.getElementById('resultValue').textContent = `A distância em quilometros é: ${message}`;
            } else {
                document.getElementById('resultValue').textContent = 'Insira um número válido';
            }
        })
        console.log(req)
    
        //isNan returns true if the value is not a number, so !isNan returns true if the value is a number

    }
