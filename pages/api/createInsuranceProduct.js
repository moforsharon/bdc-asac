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

// pages/api/createInsuranceProduct.js
import axios from 'axios';

export default async function handler(req, res) {
  const { name, product_type, product_price, product_validity } = req.query;

  try {
    const response = await axios.get('https://afriscience-59aa5aca58b6.herokuapp.com/api/create_insurance_product/', {
      params: {
        name,
        product_type,
        product_price,
        product_validity
      }
    });

    // Forward the response from the external API to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors
    res.status(error.response.status || 500).json({ error: error.message });
  }
}

