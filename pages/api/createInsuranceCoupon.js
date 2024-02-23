import axios from 'axios';

export default async function handler(req, res) {
  const {     
    insured_name,
    insurance_insured_address,
    insurance_insured_profession,
    insurance_policenumber,
    insurance_validity,
    insurance_product,
    insurance_vehicle_make,
    insurance_vehicle_registration_chassis,
    insurance_vehicle_type,
    insurance_category_of_use } = req.query;
  try {
    const response = await axios.get('https://afriscience-59aa5aca58b6.herokuapp.com/api/create_insurance_coupon/', {
      params: {
        insured_name,
        insurance_insured_address,
        insurance_insured_profession,
        insurance_policenumber,
        insurance_validity,
        insurance_product,
        insurance_vehicle_make,
        insurance_vehicle_registration_chassis,
        insurance_vehicle_type,
        insurance_category_of_use
      }
    });

    // Forward the response from the external API to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // If error.response does not exist, use a default status code
    const statusCode = error.response ? error.response.status : 500;

    // Handle errors
    res.status(statusCode).json({ error: error.message });
  }
}
