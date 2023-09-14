async function CalcStudentGrades() 
{
    const gradesInput = document.getElementById("grades").value;

    // Divide as notas pela vírgula para criar um array
    const gradesArray = gradesInput.split(",");

    // Crie um array de objetos com a propriedade "score"
    const grades = gradesArray.map(grade => ({ score: grade.trim() }));

    const req = await requester('post', '1/9', { grades }, ({ data }) => {
        document.getElementById('resultValue').textContent = `Sua média foi de ${data.score} você foi: ${data.mesage}`;
    })
    console.log(req);
};