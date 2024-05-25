const express = require('express');
const mongoose = require('mongoose');
const scholarshipRoutes = require('./routes/scholarshipRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/scholarship-finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Scholarship routes
app.use('/api/scholarships', scholarshipRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
