// import axios from 'axios';

// export default async function handler(req, res) {
//     const apiUrl = 'https://afriscience-59aa5aca58b6.herokuapp.com/api/create_insurance_product/';

//     try {
//         const response = await axios.post(apiUrl, req.body);
//         res.status(200).json(response.data);
//     } catch (error) {
//         console.error('Error proxying request:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

import axios from 'axios';

export default async function handler(req, res) {
    const { name, product_type, product_price, product_validity } = req.query;
    const apiUrl = `https://afriscience-59aa5aca58b6.herokuapp.com/api/create_insurance_product/?name=${name}&product_type=${product_type}&product_price=${product_price}&product_validity=${product_validity}`;

    try {
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error proxying request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
