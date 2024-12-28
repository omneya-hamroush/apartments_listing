// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
const API_URL = 'http://localhost:3001/api';

export const fetchApartments = async () => {
console.log("XXXXXXXXXXXXXXXX");

const res = await fetch(`${API_URL}/apartments`);
if (!res.ok) throw new Error('Failed to fetch apartments');
return res.json();
};

// utils/api.js

export const fetchApartmentDetails = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/apartments/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch apartment details');
      }
      return await res.json();
    } catch (error) {
      console.error('Error in fetchApartmentDetails:', error);
      throw error;
    }
  };
  
