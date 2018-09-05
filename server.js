const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

// DB CONFIG
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;


// USE routes
app.use('/api/items', items);


//Serve static assets when in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(port, () => console.log('Server started on Port' + port));