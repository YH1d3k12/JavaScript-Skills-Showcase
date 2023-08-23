import express from 'express';
import { SumTwoNumbers } from './queryScript/1_sum_two_numbers.js';

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CalcSalary (
        parseFloat(req.body.salary),
        parseFloat(req.body.hoursWorked)
    );

    res.status(200).json({
        message: `Deverá receber: ${result}`,
    });
});

export default api_router;