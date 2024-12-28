const express = require('express');
const cors = require('cors');

const apartmentRoutes = require('./routes/apartment'); 

const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

// app.get('/', async (req, res) => {
//   const result = await pool.query('SELECT * from apartment');
//   res.send(`apartment: ${result.rows[0]}`);
// });

// Enable CORS for all origins
app.use(cors());

// Alternatively, you can configure CORS more specifically, for example:
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only frontend to access
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());


app.use('/api', apartmentRoutes);

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});



