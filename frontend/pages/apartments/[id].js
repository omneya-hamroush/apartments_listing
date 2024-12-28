import { useState, useEffect } from 'react';
import { fetchApartmentDetails } from '../../utils/api';

export default function ApartmentDetails({ apartmentId }) {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const data = await fetchApartmentDetails(apartmentId);
        setApartment(data);
      } catch (err) {
        console.error("Error fetching apartment:", err);
      }
    };

    fetchApartment();
  }, [apartmentId]);

  if (!apartment) return <div>Loading...</div>;
  if (!apartment) return <div>Apartment not found</div>;

  return (
    <div>
      <h1>Apartment Details</h1>
      <p>Unit Number: {apartment.unit_number}</p>
      <p>Price: ${apartment.price}</p>
      <p>Size: {apartment.size} sqft</p>
      <p>Status: {apartment.status}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { apartmentId: params.id } };
}
