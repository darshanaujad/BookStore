require('dotenv').config();
const rateLimit = require('express-rate-limit');
const express = require('express');
const cors = require('cors');
const app = express();
require('./src/config/db');

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));

// Create a rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    message: "Too many requests, please try again later.",
});

// Apply limiter to all routes
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Server is running...');
})

const authRoutes = require('./src/routes/auth.routes');
app.use('/api/auth', authRoutes);

const categoryRoutes = require('./src/routes/category.routes');
app.use('/api/category', categoryRoutes);

const bookRoutes = require('./src/routes/book.routes');
app.use('/api/book', bookRoutes);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

