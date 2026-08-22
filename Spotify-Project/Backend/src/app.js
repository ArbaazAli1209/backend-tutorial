const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.routes')

const app = express();
app.use(express.json());
app.use(cookieParser());

const cors = require('cors')

app.use(cors({
  origin: 'https://backend-tutorial-eta.vercel.app/login',
  credentials: true,
}))

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);

module.exports = app;