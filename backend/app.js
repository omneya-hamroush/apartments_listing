const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'apartments_system_db_1',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT * from apartment');
  res.send(`Apartment: ${result.rows[0]}`);
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
