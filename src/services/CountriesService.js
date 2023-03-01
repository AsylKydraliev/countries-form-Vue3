import axios from "axios";

const auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc3lsLmt5ZHJhbGlldkBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiI4by1ZdWxpMVZKMzZqZlVqc2xYSFhTZjRxMWlJdnRQZVA1cjNhRDFHUGFyOGlvanhJbjE5SDI3dmZIeDc0WWJ1YlhFIn0sImV4cCI6MTY3Nzc3NDA0NH0.O95K27THUMwHUL4Q8AOkhxHMQ4y6RoBa1tHX9qnxp94';
const base_url = 'https://www.universal-tutorial.com/api';

export const getCountries = async () => {
  const response = await axios.get(`${base_url}/countries`, {
    headers: {
      "Authorization": `Bearer ${auth_token}`,
      "Accept": "application/json"
    }
  });

  if (!response) {
    return [];
  }

  return response.data;
}

export const getRegionsByCountry = async (countryName) => {
  const response = await axios.get(`${base_url}/states/${countryName}`, {
    headers: {
      "Authorization": `Bearer ${auth_token}`,
      "Accept": "application/json"
    }
  });

  if (!response) {
    return [];
  }

  return response.data;
}

export const getCitiesByRegion = async (regionName) => {
  const response = await axios.get(`${base_url}/cities/${regionName}`, {
    headers: {
      "Authorization": `Bearer ${auth_token}`,
      "Accept": "application/json"
    }
  });

  if (!response) {
    return [];
  }

  return response.data;
}