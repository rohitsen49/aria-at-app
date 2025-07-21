module.exports = {
  development: {
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    dialectOptions: {
      // ssl: true, ← REMOVE this line for local
      multipleStatements: true
    },
    seederStorage: 'sequelize',
    logging: false
  },
  test: {
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    dialectOptions: {
      // ssl: true, ← REMOVE this line for local test too
      multipleStatements: true
    },
    seederStorage: 'sequelize',
    logging: false
  }
};
