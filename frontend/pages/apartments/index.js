import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchApartments } from '../../utils/api';
import styles from './index.module.css'; 
import { searchApartments } from '../../utils/api';



export default function ApartmentList() {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    unit_number: '',
    status: '',
    sale_type: '',
    min_price: '',
    max_price: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const fetchFilteredApartments = async () => {
    try {
      const data = await searchApartments(filters);
      setApartments(data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchFilteredApartments();
  }, [filters]);
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
      <div className="filter-form">
        <label>
          Unit Number:
          <input
            type="text"
            name="unit_number"
            value={filters.unit_number}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="AVAILABLE">Available</option>
            <option value="UNDER_CONSTRUCTION">Under Construction</option>
          </select>
        </label>
        <label>
          Sale Type:
          <select
            name="sale_type"
            value={filters.sale_type}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="FOR_SALE">For Sale</option>
            <option value="FOR_RENT">For Rent</option>
          </select>
        </label>
        {/* <label>
          Min Price:
          <input
            type="number"
            name="min_price"
            value={filters.min_price}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="max_price"
            value={filters.max_price}
            onChange={handleFilterChange}
          />
        </label> */}
        <button onClick={fetchFilteredApartments}>Search</button>
      </div>
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
