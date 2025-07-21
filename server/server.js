require('dotenv').config({ path: './config/dev.env' });

const { parse } = require('pg-connection-string');
const { Pool } = require('pg');

const parsed = parse(process.env.DATABASE_URL);

// 🔐 Force type conversion to avoid password errors
parsed.port = parseInt(parsed.port, 10);
parsed.password = String(parsed.password);

// Log database config (safe fields only)
// console.log("Parsed DATABASE_URL:", {
//   user: parsed.user,
//   host: parsed.host,
//   port: parsed.port,
//   database: parsed.database
// });

// Manual connection test (before anything else)
const testPool = new Pool(parsed);
testPool.query('SELECT NOW()', err => {
  if (err) {
    // console.error('Manual pool test FAILED:', err);
  }
});

// console.log('DATABASE_URL:', process.env.DATABASE_URL);

const { listener } = require('./app');

const port = process.env.PORT || 8000;

listener.listen(port, () => {
  // console.log(`Listening on ${port}`);
});

module.exports = { listener };
