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
      {/* <p>{apartment.image_url}</p> */}
      <img
        src={apartment.image_url }
        alt={apartment.unit_number}
        className={styles.apartmentImage}
      />
      <p className={styles.info}>
        <span>Unit Number:</span> {apartment.unit_number}
      </p>
      <p className={styles.info}>
        <span>Price:</span> ${apartment.price}
      </p>
      <p className={styles.info}>
        <span>Size:</span> {apartment.size} sqft
      </p>
      <p className={styles.info}>
        <span>Status:</span> {apartment.status}
      </p>
      <p className={styles.info}>
        <span>Building Number:</span> {apartment.building_number}
      </p>
      <p className={styles.info}>
        <span>Compound ID:</span> {apartment.compound_id}
      </p>
      <p className={styles.info}>
        <span>Sale Type:</span> {apartment.sale_type}
      </p>
    </div>
  );
  
}

export async function getServerSideProps({ params }) {
  return { props: { apartmentId: params.id } };
}
