export function CalculateAverageWeight(w1, w2, w3, w4, w5)
{
    if (!isNaN(w1) && !isNaN(w2) && !isNaN(w3) && !isNaN(w4) && !isNaN(w5))
    {
        return parseFloat((w1 + w2 + w3 + w4 + w5) / 5);
    }

}