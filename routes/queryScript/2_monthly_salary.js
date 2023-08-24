export function CalculateMonthlySalary(salary, hoursWorked)
{
    if (!isNaN(salary) && !isNaN(hoursWorked))
    {
        return parseFloat(salary * hoursWorked);
    }

}