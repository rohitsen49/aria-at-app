const session = require('express-session');
const { Pool } = require('pg');
const pgSession = require('connect-pg-simple')(session);
const { parse } = require('pg-connection-string');

// Parse the DATABASE_URL manually to ensure proper types
const config = parse(process.env.DATABASE_URL);

// Convert types to what `pg` expects
config.port = parseInt(config.port, 10);
config.password = String(config.password); // Fix the password must be string error

const pool = new Pool(config);

module.exports = {
  session: session({
    secret: process.env.SESSION_SECRET || 'aria at report',
    resave: false,
    saveUninitialized: true,
    store: new pgSession({
      pool,
      tableName: 'session'
    }),
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  })
};
