import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchApartments } from '../../utils/api';
import styles from './index.module.css'; // Create a CSS module

export default function ApartmentList() {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApartments = async () => {
      try {
        const data = await fetchApartments();
        setApartments(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getApartments();
  }, []);

  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!apartments.length) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apartment List</h1>
      <div className={styles.grid}>
        {apartments.map((apartment) => (
          <div key={apartment.id} className={styles.card}>
            <Link href={`/apartments/${apartment.id}`}>
              <a className={styles.cardContent}>
                <h2>{apartment.unit_number}</h2>
                <p>Price: ${apartment.price}</p>
                <p>Size: {apartment.size} sqft</p>
                <p>Status: {apartment.status}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
