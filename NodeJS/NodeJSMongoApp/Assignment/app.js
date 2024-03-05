const express = require('express')
const app = express()
const taskroutes=require('./routes/assetRoutes')
require('./database/db')

const port=3000;
app.get('/hi', async (req, res, next) => {
    res.status(200).send('Hello World!')
})
app.use(express.json())
app.use('/task',taskroutes)



// app.js

const assetRoutes = require('./routes/assetRoutes');


// Middleware

app.use('/', assetRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});