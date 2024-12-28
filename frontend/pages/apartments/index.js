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
      <h1 className={styles.title}>Apartments List</h1>
      <div className={styles.apartmentList}>
        {apartments.map((apartment) => (
          <div key={apartment.id} className={styles.apartmentCard}>
            {/* <p>{apartment.image_url}</p> */}
            <img
              src={apartment.image_url }
              alt={apartment.unit_number}
              className={styles.apartmentImage}
            />
            <Link href={`/apartments/${apartment.id}`}>
              <a>
                {apartment.unit_number} - ${apartment.price}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
