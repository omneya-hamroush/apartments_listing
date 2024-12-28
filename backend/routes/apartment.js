const express = require('express');
const router = express.Router();
const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
  });

router.get('/apartments', async (req, res) => {
try {
    const result = await pool.query("SELECT * FROM apartment where status in ('UNDER_MAINTENANCE','UNDER_CONSTRUCTION','AVAILABLE','FINISHED','FULLY_FINISHED')");
    res.status(200).json(result.rows);
} catch (error) {
    console.error('Error fetching apartments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});


router.get('/apartments/:id', async (req, res) => {
try {
    console.log("Received request for apartment with ID:", req.params.id);
    console.log("KKKKKKKKKKKKKKKKKKKK", req.params)
    const { id } = req.params;
    const apartment = await pool.query('SELECT * FROM apartment WHERE id = $1', [id]);
    if (apartment.rows.length === 0) {
    return res.status(404).json({ message: 'Apartment not found' });
    }
    res.json(apartment.rows[0]);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});
module.exports = router;
