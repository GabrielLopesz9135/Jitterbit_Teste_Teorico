require('dotenv').config();
require('express-async-errors'); // habilita captura de erros
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { connectDB } = require('./database');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

// routes
app.use('/order', orderRoutes);

// healthcheck
app.get('/', (req, res) => res.json({ ok: true }));

// error handler (centralizado)
app.use(errorHandler);

// connect DB and start server (if run directly)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  connectDB()
    .then(() => {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
      console.error('DB connection failed', err);
      process.exit(1);
    });
}

module.exports = app;
