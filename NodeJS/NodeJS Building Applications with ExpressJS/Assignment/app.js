const express = require('express')
const app = express()
const taskroutes=require('./routes/taskroutes')
require('./database/db')

const port=3000;
app.get('/hi', async (req, res, next) => {
    res.status(200).send('Hello World!')
})
app.use(express.json())
app.use('/task',taskroutes)


app.listen(port, () => {
    console.table([
        {
            port: `${port}`
        }
    ])
})
