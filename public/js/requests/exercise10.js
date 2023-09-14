async function BMICalculator() 
{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    const req = await requester('post', '1/10', { weight, height }, ({ data }) => {
        document.getElementById('resultValue').textContent = `Pontuação de ${data.score} ${data.message}`;
    })
    console.log(req);
};