const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const { animals } = require('./data/animals.json');
const fs = require('fs');
const path = require('path');
// instantiate the server
const PORT = process.env.PORT || 3001;
const app = express();

///  Middleware helper functions

// It makes certain files readily avaliable
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({esteended: true}));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});