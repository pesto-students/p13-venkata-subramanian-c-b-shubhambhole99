// index.js or app.js
const express = require('express');
const bodyParser = require('body-parser');
const assetRoutes = require('./routes/assetRoutes');
const sequelize = require('./database/db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use asset routes
app.use('/assets', assetRoutes);

// Start the server after connecting to the database
sequelize.sync()
  .then(() => {
    console.log('Connected to MySQL database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MySQL:', err.message);
  });