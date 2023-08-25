function SpecifyAge()
{
    let age = parseFloat(document.getElementById('age').value);

    if (!isNaN(age)) {
        const daysInYear = 365.25;

        let totalDays = age * daysInYear;
        let months = Math.floor(totalDays / 30.44);

        totalDays -= months * 30.44;
        let days = Math.floor(totalDays);

        document.getElementById('resultValue').textContent = `${months} mes(es) e ${days} dia(s)`;
    } else {
        document.getElementById('resultValue').textContent = 'Insira um número válido';
    }
}