export function ConvertSecondsToTime(km)
{
    if (!isNaN(km))
    {
        let m = parseFloat(km * 1000);
        let cm = parseFloat(m * 100);
        
        return `Kilometers to Meters: ${m} \n Kilometers to Centimeters: ${cm}`;
    }
}