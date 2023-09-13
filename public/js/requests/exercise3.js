async function CalculateAverageWeight() 
{
    let people = [];

    for (let i = 1; i <= 5; i++) 
    {
        let weightInput = document.getElementById("w" + i);
        let weightValue = weightInput.value.trim();

        if (weightValue != "") 
        {
            people.push({weight: weightValue});
        }
    }
    console.log(people)

    const req = await requester('post', '3', { people }, ({ data: { message }}) => {
        document.getElementById('resultValue').textContent = `A média de peso é: ${message}`;
    });
    console.log(req);
};