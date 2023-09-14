async function ConvertKmToMeterAndCm() 
{
    let km = document.getElementById('km').value;
    
    const req = await requester('post', '1/7', { km }, ({ data }) => {
        document.getElementById('resultValue').innerHTML = `<br> Quilometros para metros: ${ data.meters }m <br> Quilometros para centimetros ${ data.centimeters } cm`;
    });
    console.log(req);
}