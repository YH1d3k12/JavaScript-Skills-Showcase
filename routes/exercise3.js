import express from 'express';
import { CalculateAverageWeight } from './exercises/3_average_weight.js';

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CalculateAverageWeight(
        req.body.w1,
        req.body.w2,
        req.body.w3,
        req.body.w4,
        req.body.w5
    )

    res.status(200).json({
        message: `The average weigth is: ${result}`,
    });
});

export default api_router;