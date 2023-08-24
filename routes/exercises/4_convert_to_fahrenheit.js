export function ConvertCelsiusToFahrenheit(celsius)
{
    if (!isNaN(celsius))
    {
        return parseFloat((9 * celsius + 160) / 5);
    }
}