import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchApartments } from '../../utils/api';

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

if (error) return <div>Error: {error}</div>;
if (!apartments.length) return <div>Loading...</div>;

return (
<div>
    <h1>Apartment List</h1>
    <ul>
    {apartments.map((apartment) => (
        <li key={apartment.id}>
        <Link href={`/apartments/${apartment.id}`}>
            <a>{apartment.unit_number} - ${apartment.price}</a>
        </Link>
        </li>
    ))}
    </ul>
</div>
);
}
