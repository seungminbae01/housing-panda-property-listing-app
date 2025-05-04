const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const listingsRoutes = require('./routes/listings');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/listings', listingsRoutes);

db.sync()
  .then(() => {
    console.log('DB tables created');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Port: ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));