const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors())
app.use( express.static('public') );
app.use( express.json() );

// Rotes
app.use('/message', require('./routes/messages') );

// Listening
app.listen( process.env.PORT, () => {
    console.log(`Server running at port: http://localhost:${ process.env.PORT }`);
});