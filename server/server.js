const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

const app = express();

// CORS configuration for allowing frontend requests
app.use(cors({
    origin: 'http://localhost:5173', // Vite dev server
    methods: ['GET', 'POST'],
    credentials: true,
  }));
app.use(express.json());

// Root test route to verify the backend is working
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Mongoose connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

  

  app.post('/api/cart', async (req, res) => {
    const { userId, productId, size, quantity } = req.body;
  
    if (!userId || !productId || !size) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    try {
      const newCartItem = new Cart({
        userId,
        productId,
        size,
        quantity: quantity || 1,
      });
  
      const savedItem = await newCartItem.save();
      res.status(201).json({ message: 'Item added to cart', savedItem });
    } catch (error) {
      console.error('Add to cart error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  


  //Orders route
  app.post('/api/orders', async (req, res) => {
    try {
      const {
        firstName, lastName, email, street,
        city, state, zipCode, country,
        phone, paymentMethod, subtotal,
        shippingFee, total
      } = req.body;
  
      // Simple validation for required fields
      if (
        !firstName || !lastName || !email || !street ||
        !city || !state || !zipCode || !country ||
        !phone || !paymentMethod || subtotal == null ||
        shippingFee == null || total == null
      ) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Optional: basic format checks (e.g., email)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
  
      // Create and save order
      const order = new Order({
        firstName, lastName, email, street,
        city, state, zipCode, country,
        phone, paymentMethod, subtotal,
        shippingFee, total
      });
  
      await order.save();
      res.status(201).json({ message: 'Order placed successfully', order });
  
    } catch (error) {
      res.status(500).json({ message: 'Order failed', error });
    }
  });
  



// Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  console.log('📥 Received signup data:', { name, email, password });
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already in use' });

    //const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password,
    });
    

    const savedUser = await newUser.save();
    console.log('✅ User saved to DB:', savedUser);

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(400).json({ message: 'Invalid email or password' });

    

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});














// Start the server
//const PORT = process.env.PORT || 5173;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
