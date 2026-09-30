const express = require('express');
const path = require('path');

const disasterRoutes = require('./routes/disasterRoutes');
const donationRoutes = require('./routes/donationRoutes');
const allocationRoutes = require('./routes/allocationRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine (EJS) setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', disasterRoutes);
app.use('/', donationRoutes);
app.use('/', allocationRoutes);

// Port listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});