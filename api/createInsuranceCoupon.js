import axios from 'axios';

export default async function handler(req, res) {
    const apiUrl = 'https://afriscience-59aa5aca58b6.herokuapp.com/api/create_insurance_product//';

    try {
        const response = await axios.post(apiUrl, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error proxying request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}