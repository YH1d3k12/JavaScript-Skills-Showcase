async function CalculateAverageWeight() 
{

    const peopleInput = document.getElementById("peopleWeight").value;

    // Divide o peso pela vírgula para criar um array
    const peopleArray = peopleInput.split(",");

    // Crie um array de objetos com a propriedade "weight"
    const people = peopleArray.map(person => ({ weight: person.trim() }));
    console.log(people)

    const req = await requester('post', '1/3', { people }, ({ data: { message }}) => {
        document.getElementById('resultValue').textContent = `A média de peso é: ${message}`;
    });
    console.log(req);
};

    // Versão antiga
    // let people = [];
    // for (let i = 1; i <= 5; i++) 
    // {
    //     let weightInput = document.getElementById("w" + i);
    //     let weightValue = weightInput.value.trim();

    //     if (weightValue != "") 
    //     {
    //         people.push({weight: weightValue});
    //     }
    // }