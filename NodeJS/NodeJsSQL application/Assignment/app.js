const express = require('express')
const bodyParser = require('body-parser');
const assetRoutes = require('./routes/assetroutes');
// const financialRoutes = require('./routes/financialRoutes');
const db = require('./database/db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json())


// Use routes
app.use('/assets', assetRoutes);
// app.use('/financials', financialRoutes);

// Start the server after connecting to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
  } else {
    console.log('Connected to MySQL database');
  
}
});


app.listen(port, () => {
    console.table([
        {
            port: `${port}`
        }
    ])
})


app.get('/hi', async (req, res, next) => {
    res.status(200).send('Hello World!')
})

