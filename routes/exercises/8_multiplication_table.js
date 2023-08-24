export function ConvertSecondsToTime(number)
{
    if (!isNaN(number))
    {
        for (i = 1; i <= 10; i++)
        {
            return `${number} x ${i} : ${parseFloat(number * i)}`; 
        }
    }
}