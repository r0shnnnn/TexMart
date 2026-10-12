
require('dotenv').config();
const { protect } = require('./middleware/authMiddleware');
const { authorizeRoles } = require('./middleware/roleMiddleware');      
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to TexMart API!',
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'TexMart backend is running.',
  });
});

app.use('/api/auth', authRoutes);
app.get('/api/auth/me', protect, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

app.get(
  '/api/broker/test',
  protect,
  authorizeRoles('broker'),
  (req, res) => {
    res.json({
      success: true,
      message: 'Broker authorization successful.',
    });
  }
);

module.exports = app;
