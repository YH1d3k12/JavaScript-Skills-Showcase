async function CreateMultiplicationTable() 
{
    let number = parseFloat(document.getElementById('number').value);

    const req = await requester('post', '1/8', { number }, ({ data }) => {
        if (data.message && Array.isArray(data.message)) 
        {
            // Limpar qualquer conteúdo existente
            document.getElementById('resultValue').textContent = '';

            // Começa iterar pelo array, item sendo o objeto atual e index o indice
            data.message.forEach((item, index) => {
                const equation = item.equation;
                const result = item.result;

                // Criar elementos para exibir a equação e o resultado
                const equationElement = document.createElement('p');
                equationElement.textContent = `${equation} = ${result}`;

                // Adicionar o elemento ao resultado no HTML
                document.getElementById('resultValue').appendChild(equationElement);
            });
        }
    });
    console.log(req);
};