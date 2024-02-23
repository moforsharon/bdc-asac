import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://afriscience-59aa5aca58b6.herokuapp.com/api/get_insurance_products');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch products' });
  }
}