import express from 'express';
import { SumTwoNumbers } from './exercises/1_sum_two_numbers.js';

const api_router = express.Router();

// api_router.get('/', (req, res) => {
//     let num1 = parseFloat(req.query.num1);
//     let num2 = parseFloat(req.query.num2);

//     if (isNaN(num1) || isNaN(num2))
//     {
//         res.status(501).json({
//             message: `Ensira dois números`
//         });
//         return;
//     }
//     else
//     {
//         res.json({
//             message: `A partir do GET Resultado: ${num1 + num2}`
//         });
//     }
// });

api_router.post('/', (req, res) => {
    const result = SumTwoNumbers(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `Sum result: ${result}`,
    });
});

export default api_router;