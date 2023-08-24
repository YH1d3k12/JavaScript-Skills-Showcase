export function ConvertMilesToKilometers(miles)
{
    if (!isNaN(miles))
    {
        return parseFloat(miles * 1.60934);
    }
}