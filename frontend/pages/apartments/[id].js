import { useState, useEffect } from 'react';
import { fetchApartmentDetails } from '../../utils/api';
import styles from './id.module.css';

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

  if (!apartment) return <div className={styles.container}>Loading...</div>;
  if (!apartment) return <div className={styles.container}>Apartment not found</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apartment Details</h1>
      <p className={styles.info}>Unit Number: {apartment.unit_number}</p>
      <p className={styles.info}>Price: ${apartment.price}</p>
      <p className={styles.info}>Size: {apartment.size} sqft</p>
      <p className={styles.info}>Status: {apartment.status}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { apartmentId: params.id } };
}
