// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // Choose any port you prefer

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harish@123',
    database: 'syncmate'
});
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Define your API endpoints
app.post('/insert_letter', (req, res) => {
    console.log(req.body);
    const {  date, sname, regno, sub, body, status  } = req.body;
    const sql = 'INSERT INTO letter (date, sname, regno, sub, body, status) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [date, sname, regno, sub, body, status], (error, results) => {
        if (error) {
            console.error('Error adding data to MySQL:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Data added successfully' });
    });
});

app.post('/get_letter', (req, res) => {
    console.log(req.body);
    const {regno} = req.body;
    const sql = 'SELECT * FROM letter WHERE regno = ?';
    connection.query(sql, [regno], (error, results) => {
        if (error) {
            console.error('Error retrieving data from MySQL:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});
app.put('/letter/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    const sql = `UPDATE letter SET status = ? WHERE id = ?`;
  
    connection.query(sql, [status, id], (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error updating letter status' });
      } else {
        res.status(200).send({ message: 'Letter status updated successfully' });
      }
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
