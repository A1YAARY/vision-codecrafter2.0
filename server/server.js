import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import priceRoutes from './routes/priceRoutes.js';

const app = express();
const FRONTEND_ORIGIN = 'http://localhost:3000'; // Update with your frontend URL

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true, // Allow cookies to be sent
  })
);

// Routes
app.use('/api/user', userRoutes);
app.use('/api/price', priceRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
