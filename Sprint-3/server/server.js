const express = require ('express')
const app = express () 
const routes = require('./routes/videosRoutes');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors())

app.use('/videos', routes),


app.listen(port, () => console.log(`Server is running on ${port}`)
);









